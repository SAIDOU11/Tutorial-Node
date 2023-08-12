const EventEmitter = require('events');

const customEmitter = new EventEmitter(); // instance

// on - listen for an event
customEmitter.on('response', (name, id) => {
  console.log(`Data received user ${name} with id: ${id} `);
});

customEmitter.on('response', () => {
  console.log(`Some other logic here`);
});

// The order matters

// emit - emit an event
customEmitter.emit('response', 'John', 34);
