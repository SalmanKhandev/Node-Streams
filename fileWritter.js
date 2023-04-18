const fs = require('fs');



const writeableStream = fs.createWriteStream('log.txt');
const createReadStream = fs.createReadStream('log.txt');
process.stdin.pipe(writeableStream);
createReadStream.pipe(process.stdout);