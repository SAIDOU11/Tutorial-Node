const { readFile } = require('fs');

console.log('STARTED THE FIRST TASK');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('COMPLETED FIRST TASK');
});
console.log('STARTED THE NEXT TASK');
