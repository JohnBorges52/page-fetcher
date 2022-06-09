const request = require("request");
const fs = require('fs');

request('http://www.example.edu/', (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  
  fs.writeFile('/home/joao/lighthouse/page-fetcher/atest.txt',body,'utf-8', err => {
    if(err){
      console.error("fsWriteFileError:",err);
    }
  
  });




});





