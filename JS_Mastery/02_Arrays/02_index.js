const threeEmptySeats = Array();
// console.log(threeEmptySeats);
// threeEmptySeats[0] = 1;
// console.log(threeEmptySeats)

const anotherThreeEmptySeats =  Array.of(3,4);
// console.log(anotherThreeEmptySeats)
// console.log(anotherThreeEmptySeats.length)

/*
📦 Array vs Array.of() in JavaScript

🔹 Array()
👉 If one number is passed → creates empty array of that size
Example: Array(5) → [empty × 5]

👉 If multiple values → works like normal array
Example: Array(1, 2, 3) → [1, 2, 3]

⚠️ Problem: Single number is treated as length, not element.


🔹 Array.of()
👉 Always creates array from given values
Example: Array.of(5) → [5] ✅

✅ Safer and predictable
✅ Treats every argument as element

🚀 Use Array.of() when you want actual values, not array size.
*/

const stringArr = Array.from("RONI");
console.log(stringArr);
/*
📦 Array.from()

👉 If mapFn is provided → array stores function return values.
👉 If mapFn is not provided → array copies values as they are.

Example:
Array.from([1,2,3]) → [1,2,3]
Array.from([1,2,3], x => x*2) → [2,4,6]
*/
/*
📦 shift() → removes first element from array.
Returns removed value.

📦 unshift() → adds element at beginning.
Returns new array length.

shift() → remove from start
unshift() → add to start
*/

console.log(stringArr.splice())


// Key point

/**
* Mutating methods: Push, Pop, shift, unshift, splice
 * NonMutating: slice, flat, flatmap,concat
 * Searching: indexOf, includes
 * Array.isArray() -> checking is array or not.
* */