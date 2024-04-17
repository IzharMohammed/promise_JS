function getRandomInt(num) {
    return Math.floor(Math.random() * num)
}

function createPromiseWithTimeout() {

    return new Promise(function executor(resolve, reject) {

        console.log('Entering executor callback in promise constructor');

        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve(num);
            } else {
                reject(num);
            }
        }, 10000);


        console.log('Exitting the executor callback in promise constructor');
    })
}

console.log('Starting ........');
const p = createPromiseWithTimeout();
console.log('We are waiting for the promise to complete');
console.log('Currently my promise object is like ...', p);

p.then(
    function fullfillHandler(value) {
        console.log(p);
        console.log('inside fullfill handler with value ', value);
    },

    function rejectionHandler(value) {
        console.log('inside rejection handler with value ', value);
    }
)