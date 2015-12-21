//Lesson 7 - Maximum slice problem
//MaxDoubleSliceSum
//Find the maximal sum of any double slice.

function solution(A) {
    var maxLeft = [0];
    var maxRight = [];
    maxRight[A.length - 1] = 0;

    for (var i = 1; i < A.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1] + A[i], 0);
    }

    for (var j = A.length - 2; j >= 0; j--) {
        maxRight[j] = Math.max(maxRight[j + 1] + A[j], 0);
    }

    var maxSlice = 0;

    for (var k = 1; k < A.length - 1; k++) {
        maxSlice = Math.max(maxLeft[k - 1] + maxRight[k + 1], maxSlice);
    }

    return maxSlice;
}
