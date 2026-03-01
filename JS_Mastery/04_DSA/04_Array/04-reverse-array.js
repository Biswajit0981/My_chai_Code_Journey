class Solution {
    /**
     * Reverses the given array.
     * @param {number[]} arr - The array to be reversed.
     * @returns {number[]} The reversed array.
     */
    flipArray(arr) {
        // Your implementation here
        return arr.reverse();
    }

    ownFilpArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n/2; i++) {
            let temp = arr[i];
            arr[i] = arr[n-1-i];
            arr[n-1-i] = temp;
        }
        return arr;
    }
}