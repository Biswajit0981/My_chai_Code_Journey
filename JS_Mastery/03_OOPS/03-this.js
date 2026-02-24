//! 24-02-26 Hello Sir

// console.log(this ) //output: {}

/*
const bollywood = {
    name: "bollywood",
    sing: function () {
        console.log(`call ${this.introduce()}`)
    },
    introduce() {
        return this;
    }
}

function globalStage () {
    return this;
}
console.log(bollywood.introduce());
bollywood.sing()
console.log(globalStage());
*/

// const filmDirector = {
//     name: "Sanjay Leela Bhansali",
//     cast: ["Ranveer", "Deepika", "Priyanka"],
//
//     announceCast() {
//         this.cast.forEach((actor) => {
//             console.log(`${this.name} introduces ${actor}`); // inherit this from the surrounding scope.
//         });
//     }
// };
//
// const filmSet = {
//     crew: "Spot boys",
//
//     prepareProps() {
//         console.log(`Outer this.crew: ${this.crew}`);
//
//         function arrangeChairs() {
//             console.log(`Inner this.crew: ${this.crew}`);
//         }
//
//         arrangeChairs();
//     },
// };
//
// filmSet.prepareProps();

function outer() {
    console.log("Outer this:", this);

    const inner = () => { // called de-touch function
        console.log("Inner this:", this);
    };

    inner();
}

outer();