// Implement a Module for Managing Driver Events.
// Listens for a pickup event from the Global Event Pool and responds with the following:
// Log a message to the console: DRIVER: picked up <ORDER_ID>.
// Emit an ‘in-transit’ event to the Global Event Pool with the order payload.
// Log a confirmation message to the console: DRIVER: delievered <ORDER_ID>.
// Emit a ‘delivered` event to the Global Event Pool with the order payload.
// When running, your console output should look something like this:

// EVENT { event: 'pickup',
//   time: 2020-03-06T18:27:17.732Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'in-transit',
//   time: 2020-03-06T18:27:18.738Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0
// VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'delivered',
//   time: 2020-03-06T18:27:20.736Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// ...