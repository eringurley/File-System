const fs = require('fs'); 
const { join } = require('path');

fs.readFile(join(__dirname, './my.txt'), { encoding: 'utf8' }, (err, data) => {
  if(err) return console.error(err);
    
  fs.writeFile(join(__dirname, './message.txt'), data, err => {
    if(err) return console.error(err);

console.log('Done');
  });
});
