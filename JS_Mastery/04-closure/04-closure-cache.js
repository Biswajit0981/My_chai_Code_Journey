function createOptimize (fn) {
    const cache = {};

    return function (...arguments) {
        const key = JSON.stringify(arguments);
        if (cache[key]) return cache[key];
        return cache[key] = fn.apply(this, arguments);
    }
}

function  add (a,b) {return a+b}

const optimizeAdd = createOptimize(add);
console.log(optimizeAdd(1,2))
