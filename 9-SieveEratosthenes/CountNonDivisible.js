//Lesson 9 - Sieve of Eratosthenes
//CountNonDivisible
//Calculate the number of elements of an array that are not divisors of each element.

//Version 1 - 66% - O(N**2) - bad performance, good results.

function solution1(A) {
    var counters = [];

    for (var i = 0; i < A.length; i++) {
        counters[A[i]] = typeof counters[A[i]] === "undefined" ? 1 : counters[A[i]] + 1;
    }

    var nonDivisors = [];
    for (var j = 0; j < A.length; j++) {
        var totalDivisors = 0;
        var divisor = A[j] - 1;
        while (divisor > 0) {
            if (A[j] % divisor === 0) {
                if (counters[divisor]) {
                    totalDivisors += counters[divisor];
                }
            }
            divisor--;
        }

        nonDivisors[j] = A.length - totalDivisors - counters[A[j]];
    }

    return nonDivisors;
}

//Version 2 - 100% - O(N * log(N))

function solution2(A) {
    var counters = [0, 0];

    for (var i = 0; i < A.length; i++) {
        counters[A[i]] = typeof counters[A[i]] === "undefined" ? 1 : counters[A[i]] + 1;
    }

    var nonDivisors = [];
    for (var j = 0; j < A.length; j++) {
        var totalDivisors = A[j] > 1 ? counters[1] + counters[A[j]] : counters[1];

        var divisor = 2;
        while (divisor * divisor <= A[j]) {
            if (A[j] % divisor === 0) {
                if (counters[divisor]) {
                    totalDivisors += counters[divisor];
                }
                var otherDivisor = A[j] / divisor;
                if (otherDivisor < A[j] && otherDivisor != divisor && counters[otherDivisor]) {
                    totalDivisors += counters[otherDivisor];
                }
            }
            divisor++;
        }

        nonDivisors[j] = A.length - totalDivisors;
    }

    return nonDivisors;
}
