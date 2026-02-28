const priti = {
    name: "Priti",
    generation: "GrandMather",
    cookingTradition () {
        return `${this.name} cooks an ancient method`
    }
}

const raj = Object.create(priti);

// console.log(raj);
// raj.name = "Raj";
// console.log(raj)

Array.prototype.last = function () { return this[this.length - 1]}
Array.prototype.mapTwo = function () {
    this.forEach(element => {
        console.log(element)
    })
}

