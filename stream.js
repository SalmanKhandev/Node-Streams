const {Transform} = require('stream');
const {Readable,Writable} = require('stream');
const readableStream = new Readable({
   highWaterMark:5,
   objectMode: true,
   read(){}
});

const WritableStream = new Writable({
  write(s){
    console.log("writing",s.toString());
  }
})


readableStream.on('data',(chunk)=>{
   console.log('data comming ',chunk);
  // WritableStream.write(chunk);
});



// WritableStream.write('Hello world');



// const transformStream = new Transform({
//   transform(chunk,encoding,callback){
//     console.log('Chunk', chunk.toString());
//   }
// })

readableStream.push({
  name:'Salman Khan'
})