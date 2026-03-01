// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject('Hello World');
//     }, 2000);
// });
//
//
//
//
// // promise2.catch(err => console.log(err));
//
// promise.then((data) => data.toUpperCase())
//     .catch(err => console.log(err))
//     .then(console.log)
//     .catch((e) =>  new Error("new wr"))
//     .catch(err => console.log(err))

// const turant = Promise.resolve("Turant");
// console.log(turant);
//
// const multiplePromise = Promise.all([turant, Promise.resolve("Error"), Promise.resolve("Success")]);
// multiplePromise.then(console.log)
//     .catch(err => console.log(err))

const edgePromise = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Edge")
});

async function nice () {
    const result = await edgePromise;
    console.log(result)
}

nice();
