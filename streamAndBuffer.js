const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

readStream.on('data', (chunk) => {
    console.log('============ Divider ===============');
    console.log(chunk);
});

readStream.on('open', () => {
    console.log('stream is open');
})

setTimeout(() => {
    readStream.pause()
    console.log('stream is paused');
}, 15);

setTimeout(() => {
    readStream.resume()
    console.log('stream is resumed');
}, 4000);

readStream.on('end', () => {
    console.log('stream has ended');
  });
  