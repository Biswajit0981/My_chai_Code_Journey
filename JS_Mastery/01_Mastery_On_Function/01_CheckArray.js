const arr = [1,  [2,[3]]];
console.log(arr[1][1][0])
console.log(Array.isArray(arr[1][1]))

let string = "hello"


function checkIsPalindrome(str, st, ed) {
    // base case
    if (st > ed) {
        return true;
    }

    if (str.charAt(st) != str.charAt(ed)) {
        return false;
    }

    return checkIsPalindrome(str, st+1, ed-1);
}

console.log(checkIsPalindrome("Aaa", 0, "aaa".length - 1));