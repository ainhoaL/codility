//Lesson 3 - Prefix Sums
//CountDiv
//Compute number of integers divisible by k in range [a..b].

function solution(A, B, K) {
    if (A % K === 0) {
        return Math.floor((B - A) / K) + 1;
    } else {
        return Math.floor((B - (A - A % K)) / K);
    }
}
