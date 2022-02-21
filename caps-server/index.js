'use strict';

const uuid = require('uuid').v4;
const socketio = require('socket.io');

const server = socketio(3000);
const caps = server.of('/caps');

const queue = {
  orders: {},
  backlog: {},
  addOrder: function(order) {
    let id = uuid();
    this.orders[id] = order;
    return id;
  },
  removeOrder: function (id) {
    delete this.orders[id];
  },
  addBacklog: function (message, id) {
    this.backlog[id] = message;
  },
};

caps.on('connection', (socket) => {

  socket.on('join', orderId => {
    socket.join(orderId);
    caps.emit('join', orderId);
  });

  socket.on('pickup', (payload) => {
    let id = queue.addOrders(payload);
    caps.emit('pickup', { id, payload }); // send something our to caps clients
    logger('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    caps.to(payload.orderId).emit('in-transit', payload);
    logger('in-transit', payload);
  });
  socket.on('delivery', payload => {
    console.log(queue);
    queue.removeOrders(payload.id);
    caps.to(payload.orderId).emit('delivery', payload);
    logger('delivery', payload);
  });
  
});

function logger(event, payload) {
  let timestamp = new Date();
  console.log('EVENT: ' + event, 'updatedAt: ', + timestamp);
  console.log(payload);
  let id = uuid();
  queue.addBacklog('EVENT: ' + event, id);
}