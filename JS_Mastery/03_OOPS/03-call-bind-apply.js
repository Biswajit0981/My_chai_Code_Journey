
function reportDevlivery(location, status) {
    return `${this.name} at ${location}: ${status}`
}

const deliveryBoy = {name:"Roni"};

console.log(reportDevlivery.call(deliveryBoy, "Rajnagar", "pending"))

const callRoni = reportDevlivery.bind(deliveryBoy, "Rajnagar", "pending"); // callRoni variable is store a function reference returned by bind
console.log(callRoni())

