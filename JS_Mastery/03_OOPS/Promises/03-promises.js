// function prepareOrderCB(dish, cb) {
//     setTimeout(() => cb(null, {dish, status: "prepared"}), 100);
// }
//
// function pickupOrderCB(order, cb) {
//     setTimeout(() => cb(null, {...order, status: "picked-up"}), 100);
// }
//
// function deliverOrderCB(order, cb) {
//     setTimeout(() => cb(null, {...order, status: "delivered"}), 100);
// }
//
// prepareOrderCB("Pizza", (err, order) => pickupOrderCB(order, (err, order) => deliverOrderCB(order, (err, order) => console.log(order))));


function prepareOrder(dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dish) reject("No dish provided");
            console.log(`${dish} is ready to pickup`)

            resolve({dish, status: "prepared"});
        }, 1000)
    })
}

function pickupOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) reject("No order provided");
            console.log(`${order.dish} is picked up`)
            resolve({...order, status: "picked-up"});
        }, 1000)
    })
}

function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!order) reject("No order provided");
            console.log(`${order.dish} is delivered`)
            resolve({...order, status: "delivered"});
        }, 1000)
    })
}

prepareOrder("Pizza")
    .then((order) => pickupOrder(order))
    .then((order) => deliverOrder(order))
    .then((order) => console.log(order))
    .catch((err) => console.log(err))