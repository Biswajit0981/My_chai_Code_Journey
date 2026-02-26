function TataCar (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
// {} -> this = {} -> store variable in an object -> return an object (return done by new, if we not return explicitly)
const tata = new TataCar("Tata", "Nexio", 2019);
console.log(tata);