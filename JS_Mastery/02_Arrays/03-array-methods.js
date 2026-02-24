// * Understand data first, Examine their values and possible values.

const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

orders.forEach(order => console.log(order));

// ! Array: Is ir

const totalRevenue = orders.reduce((acc, order) => {
    const category = order.spicy? "spicy" : "mild";
    acc[category].push(order);
    return acc;
}, {spicy: [], mild:[]})

console.log(totalRevenue);
