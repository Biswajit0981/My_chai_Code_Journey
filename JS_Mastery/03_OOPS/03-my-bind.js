const myObj = {
    name: "Roni",
    age: 12,
    address: "Rajnagar",
    getStatus() {
        return `${this.name} is ${this.age} years old`
    }
}

const myObj2 = {
    name: "Namrata",
    age: 13,
}

console.log(myObj.getStatus.call(myObj2))
