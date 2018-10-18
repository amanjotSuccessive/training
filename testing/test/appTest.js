/*  JavaScript library */
//const assert = require('assert');

/* using Chai */
const assert = require('chai').assert;

/* importing app.js */
/* 1 */
//const app = require('../app');
/* 2 */
const app = require('../app').sayHello;
const addition = require('../app').addition;

describe('mocha', function () {
    /* it(`some description what we want to test like \n 
        app should return hello`,function(){
     //   assert.equal(app(),'hello')
                    // input, expected value
    }); */

    it('test case: hello should be a string', function () {
        let result = app;
        assert.typeOf(result(), 'string');
    });


    it('test case: should be a Function', function () {
        let result = app;
        assert.typeOf(result, 'Function')
    });


    it('test case: addition of two numbers should be 5', function () {
        let result = addition(5, 5);
        assert.equal(result, 10);
    });
});


before(function () {
    this.timeout(0);
    console.log("Hello before");
    return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('3 seconds Timer expired!!!');
                resolve();
            }, 3000)
        })
        .then(function () {
            console.log('promise resolved!!!');
        });
});
afterEach(function () {
    this.timeout(0);
    console.log("Hello after");
    return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('3 seconds Timer expired!!!');
                resolve();
            }, 3000)
        })
        .then(function () {
            console.log('promise resolved!!!');
        });
});
describe.only('small test', function () {
    this.timeout(0);
    it('tiny test case', function (done) {
        console.log('waiting 2 seconds');
        setTimeout(function () {
            console.log('waiting over.');
            done();
        }, 1000)
    })

    it('tiny test case 2', function (done) {
        console.log('waiting 2 seconds');
        setTimeout(function () {
            console.log('waiting over.');
            done();
        }, 1000)
    })
});