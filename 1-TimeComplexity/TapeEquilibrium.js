//Lesson 1 - Time Complexity
//TapeEquilibrium
//Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.

function solution(A) {
    //Create array of sums
    var sumsArray = [];
    sumsArray[0] = A[0];
    totalSum = A[0];

    for (var i = 1; i < A.length; i++) {
        sumsArray[i] = sumsArray[i - 1] + A[i];
        totalSum += A[i];
    }

    var minimumDifference = Number.MAX_SAFE_INTEGER;
    for (var p = 1; p < sumsArray.length; p++) {
        var secondHalfSum = totalSum - sumsArray[p - 1];
        var difference = Math.abs(sumsArray[p - 1] - secondHalfSum);
        if (difference < minimumDifference) {
            minimumDifference = difference;
        }
    }

    return minimumDifference;
}
