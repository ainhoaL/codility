//Lesson 7 - Maximum slice problem
//MaxSliceSum
//Find a maximum sum of a compact subsequence of array elements.

function solution(A) {
    var maxEnding = A[0];
    var maxSlice = A[0];

    for (var i = 1; i < A.length; i++) {
        maxEnding = Math.max(A[i], maxEnding + A[i]);
        maxSlice = Math.max(maxSlice, maxEnding);
    }

    return maxSlice;
}
