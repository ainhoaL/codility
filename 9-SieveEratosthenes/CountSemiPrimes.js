//Lesson 9 - Sieve of Eratosthenes
//CountSemiprimes
//Count the semiprime numbers in the given range [a..b]

function solution(N, P, Q) {
    var factors = Array.apply(null, Array(N + 1)).map(Number.prototype.valueOf,0);
    var i = 2;
    var j;
    while (i * i <= N) {
        if (factors[i] === 0) {
            j = i * i;
            while (j <= N) {
                if (factors[j] === 0) {
                    factors[j] = i;
                }
                j += i;
            }
        }
        i++;
    }

    //Find out how many prime factors each number between 0 and N has.

    var primeFactors = Array.apply(null, Array(N + 1)).map(Number.prototype.valueOf,0);
    var semiprimes = [];
    semiprimes[0] = 0;
    semiprimes[1] = 0;
    semiprimes[2] = 0;

    for (var k = 3; k <= N + 1; k++) {
        if (factors[k] > 0) {
            var secondFactor = k / factors[k];

            if (factors[secondFactor] === 0) {
                //Both factors are prime!
                semiprimes[k] = semiprimes[k - 1] + 1;
            } else {
                semiprimes[k] = semiprimes[k - 1];
            }
        } else {
            //it is a prime
            semiprimes[k] = semiprimes[k - 1];
        }
    }

    var totalSemiprimes = [];

    for (var s = 0; s < P.length; s++) {
        totalSemiprimes[s] = semiprimes[Q[s]] - semiprimes[P[s] - 1];
    }

    return totalSemiprimes;
}
