//Lesson 7 - Maximum slice problem
//MaxProfit
//Given a log of stock prices compute the maximum possible earning.

function solution(A) {
    var minPrice = A[0];

    if (A.length < 2) {
        return 0;
    }

    var maxProfit = 0;

    for (var i = 1; i < A.length; i++) {
        maxHere = Math.max(0, A[i] - minPrice);
        minPrice = Math.min(minPrice, A[i]);

        maxProfit = Math.max(maxHere, maxProfit);
    }

    return maxProfit;
}
