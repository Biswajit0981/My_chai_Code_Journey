class Solution {
    /**
     * Shifts all zeros in the array to the end while preserving the order of non‑zero elements.
     * @param {number[]} arr - The input integer array.
     * @returns {number[]} A new array with zeros moved to the end.
     */
    shiftZerosToEnd(arr) {
        if (arr.length < 0) {
            return arr;
        }
        let result = [];
        let n = arr.length;
        let zeroCount = 0;

        arr.forEach(element => {
            if (element !== 0) {
                result.push(element);
            }else {
                zeroCount++;
            }
        });

        for (let i = 0; i < zeroCount; i++) {
            result.push(0);
        }

        return result;
    }
}

const solution = new Solution();
let res = solution.shiftZerosToEnd([1]);
console.log(res);