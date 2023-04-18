const http = require('http');
const fs   = require('fs');
const {Transform,pipeline} = require('stream');
const PORT = process.env.PORT || 5700;
const replaceWordProcessing = require('./replaceWordProcessing');
const uppercaseWordProcessing = require('./upperCaseWordProcessor');
const server = http.createServer((req,res)=>{
     if(req.url !=='/'){
        return res.end();
     }
  //  downloading file in a bad way
    // const file = fs.readFileSync('sample.txt');
    res.end(file);
    // best way of downloading file

  //  const readableStream = fs.createReadStream('sample.txt');
   readableStream.pipe(res);

   const file = fs.readFileSync('sample.txt');
   fs.writeFileSync('output.txt',file);

  //  transform streams 
 

   const readableStream = fs.createReadStream('sample.txt');
   const writeableStream = fs.createWriteStream('output.txt');
   
   readableStream.on('data',(chunk)=>{
     console.log(`Chunk: ${chunk}`);
     writeableStream.write(chunk);
   });


   readableStream
    .pipe(replaceWordProcessing)
    .on('error',(err)=>{
       console.log(err);
     })
    .pipe(uppercaseWordProcessing)
    .on('error',(err)=>{
      console.log(err);
    })
    .pipe(writeableStream)
    .on('error',(err)=>{
      console.log(err);
    })


  pipeline(
    readableStream,
    uppercaseWordProcessing,
    writeableStream,
    (err)=>{
      if(err){
        console.log(err);
      }
    }
    );

   res.end();
});




server.listen(PORT,()=>{
 console.log(`Server is listening on ${PORT}`);
});


