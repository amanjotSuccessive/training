//import async from 'async/each';
const async = require('async');
let arr = [1, 5, 10, 2, 6];

function checkAsync(index) {
    let result = new Promise((resolve, reject) => {
        return setTimeout(() => {
            console.log('In async function', index)
            return resolve("done!")
        }, 1000 * index)
    });
}

async.parallel([
    arr.forEach(x => checkAsync(x)),
    function (/* callback */) {
        console.log("hello");
    //    callback(null, 'one');
    },
    function (/* callback */) {
        console.log('hi');
     //   callback(null, 'two');
    }
], function (err, results) {});

console.log("method died...");
/* 
arr.forEach(index =>{
  console.log('forEach', index); 
  checkAsync();
});
 */