//Lesson 11 - Fibonacci numbers
//Ladder
//Count the number of different ways of climbing to the top of a ladder.

function solution(A, B) {
    var ways = [0, 1];

    var maxB = getMaxOfArray(B);

    for (var i = 2; i <= A.length + 1; i++) {
        ways[i] = (ways[i - 1] + ways[i - 2]) % (Math.pow(2, maxB));
    }

    var solutions = [];

    for (var l = 0; l < A.length; l++) {
        solutions[l] = ways[A[l] + 1] % (Math.pow(2, B[l]));
    }

    return solutions;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
