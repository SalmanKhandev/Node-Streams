const {Transform} = require('stream');
const replaceWordProcessing = new Transform({
    transform(chunk,encoding,callback){
      // console.log('Chunk', chunk.toString());
      replaceWordProcessing.emit('error',new Error('something went wrong'));
      const finalString = chunk.toString().replaceAll(/dolor/gi,'Salman Khan');
      callback(null, finalString);
    }
});

module.exports = replaceWordProcessing;