//Lesson 2 - Counting Elements
//PermCheck
//Check whether array A is a permutation.

function solution(A) {
    var countNumbers = [];

    for (var i = 0; i < A.length; i++) {
        if (A[i] > A.length) {
            return 0;
        }
        countNumbers[A[i]] = (typeof countNumbers[A[i]] === "undefined") ? 1 : countNumbers[A[i]] + 1;
    }

    for (i = 1; i < countNumbers.length; i++) {
        if (typeof countNumbers[i] === "undefined" || countNumbers[i] !== 1) {
            return 0;
        }
    }

    return 1;
}
