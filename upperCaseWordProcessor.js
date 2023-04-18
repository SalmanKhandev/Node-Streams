const {Transform} = require('stream');
const uppercaseWordProcessing = new Transform({
    transform(chunk,encoding,callback){
      // console.log('Chunk', chunk.toString());
    //   const finalString = chunk.toString().replaceAll(/dolor/gi,'Salman Khan');
      callback(null,chunk.toString().toUpperCase());
    }
});

module.exports = uppercaseWordProcessing;