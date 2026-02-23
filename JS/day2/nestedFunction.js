function hello () {
    return () => {
        return `hello`
    }
}


const hi = hello();

const r = hi();