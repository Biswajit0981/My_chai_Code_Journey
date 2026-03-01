class Solution {
    uniqueSortedElements(arr) {
        // arr: sorted array of numbers
        // Modify arr in-place to keep unique elements at the front
        // Return length of the unique prefix

        let k = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] !== arr[k-1]) {
                arr[k++] = arr[i];
            }
        }
        return k;
    }
}