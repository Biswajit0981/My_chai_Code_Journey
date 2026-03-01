function boilWater(ms) {
    return new Promise((resolve, reject) => {

        if (typeof ms !== "number" || ms <=0) reject(new Error("Please provide a number"));
        console.log("Chalo main pani le liya aur gas on bhi kar diya");
        setTimeout(resolve, ms, "Water is boiled");
    })
}

function addChaiAndSugar(type, sugar) {
    return new Promise((resolve, reject) => {
        if ((typeof type !== "string" || typeof sugar !== "number")) reject(new Error("Please provide chai or sugar"));
        setTimeout(resolve, 1000, `${type} with ${sugar}tsp sugar is added`);
    })
}

boilWater(1000).then(() => addChaiAndSugar("chai", 1)).then(console.log).catch(console.error)