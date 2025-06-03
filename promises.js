const promise = new Promise((resolve, reject) => resolve('passed'))

console.log(promise);

promise.name = 'kai'

console.log(promise);

console.log(promise);

