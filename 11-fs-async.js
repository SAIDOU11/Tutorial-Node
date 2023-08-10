const { log } = require('console');
const { readFile, writeFile } = require('fs');

console.log('FIRST LOG');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result of writing a third file 3️⃣ :
${first},
${second}
`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('DONE WITH THIS TASK');
      }
    );
  });
});
console.log('STARTING THE NEXT ONE !');
