const { readFileSync, writeFileSync } = require('fs');
console.log('FIRST LOG');
const firstRead = readFileSync('./content/first.txt', 'utf-8');
const secondRead = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result of writing a third file 3️⃣ :
${firstRead},
${secondRead}

`,
  { flag: 'a' }
);
console.log('DONE WITH THIS TASK');
console.log('STARTING THE NEXT ONE !');
