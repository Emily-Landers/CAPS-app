'use strict'
// "EVENT" { 
//     "event": "pickup",
//     "time": "2020-03-06T18:27:17.732Z",
//     "payload": { 
//       "store": "1-206-flowers",
//       "orderID": "e3669048-7313-427b-b6cc-74010ca1f8f0",
//       "customer": "Jamal Braun",
//       "address": "Schmittfort, LA"
//     }
//   }
// Implement a Module for a Global Event Pool.
// Export a single EventEmitter from the Node JS module.
// Should be imported by any module that needs to notify or be alerted by other modules of an event.
// Implement a Module for Managing Global Package Events.
// Listens to ALL events in the Event Pool.
// Logs a timestamp and the payload of every event.

const events = require('./events.js');

function pickup(payload){
    console.log('order ready')
    events.emit(' ')
}
module.exports = { pickup }