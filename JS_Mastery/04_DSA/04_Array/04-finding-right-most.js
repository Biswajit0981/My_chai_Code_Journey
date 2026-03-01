class Solution {
    /**
     * Finds all right-side leaders in the given array.
     * @param {number[]} arr - The input array of integers.
     * @returns {number[]} An array containing the leaders in their original order.
     */
    findLeaders(arr) {
        let result = [];
        let n = arr.length;
        let rightMostLeader = arr[n-1];

        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] >= rightMostLeader) {
                result.unshift(rightMostLeader);
                rightMostLeader = arr[i];
            }
        }
        result.unshift(rightMostLeader);

        return result;
    }
}

const solution = new Solution();
let res = solution.findLeaders([16, 17, 4, 3, 5, 2]);
console.log(res)
