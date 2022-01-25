// {
//     "store": "<store-name>",
//     "orderId": "<unique-order-id>",
//     "customer": "<customer-name>",
//     "address": "<city-state>"
//   }
// Your implementation should use a store name as a parameter.
// When run, the vendor module simulates a pickup event for the given store name to the Global Event Pool:
// emits pickup to the global event pool.
// emits a vendor order payload:
// Listens for a delivered event and responds by logging a message to the console