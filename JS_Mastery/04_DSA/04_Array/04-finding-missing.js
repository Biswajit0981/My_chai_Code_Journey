class Solution {
    /**
     * Finds the missing number in the array.
     * @param {number[]} arr - Array of distinct integers from 1 to n with exactly one missing.
     * @returns {number} The missing integer.
     */
    findMissingNumber(arr) {
         let n = arr.length + 1;
         let expectedSum = (n * (n+1)) / 2;

         let elementSum = arr.reduce((acc,  item) => acc + item, 0);

        return expectedSum - elementSum;
    }
}

const solution = new Solution();
let res = solution.findMissingNumber([
12, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1
]);
console.log(res)
