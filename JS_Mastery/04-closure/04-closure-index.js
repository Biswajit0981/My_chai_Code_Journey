function startCompany () {
    function ca (name) {
        return `Name of Your company is ${name}`
    }

    return ca;
}

const getMyCompany = startCompany();  // startCompany() is a outer function, which execute and return a inner function and creates a closure