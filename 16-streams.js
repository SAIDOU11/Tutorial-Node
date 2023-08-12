const { createReadStream } = require('fs');
const { size } = require('lodash');

const stream = createReadStream('../content/big.txt', {
  highWaterMark: 9000,
  encoding: 'utf-8',
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000});
// const stream = createReadStream('./content/big.txt', {encoding: 'utf-8'});

stream.on('data', (result) => {
  console.log(result);
});

// Put error on the path
stream.on('error', (err) => {
  console.log(err);
});
