//Lesson 2 - Counting Elements
//MaxCounters
//Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.

function solution(N, A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var counters = [];
    for (var j = 0; j < N; j++) {
        counters[j] = 0;
    }

    var max = 0;
    var newCounterStart = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            var counter = A[i] - 1;

            if (counters[counter] < newCounterStart) {
                counters[counter] = newCounterStart;
            }
            counters[counter]++;

            if (max < counters[counter]) {
                max = counters[counter];
            }
        } else {
            newCounterStart = max;
        }
    }

    for (j = 0; j < N; j++) {
        if (counters[j] < newCounterStart) {
            counters[j] = newCounterStart;
        }
    }

    return counters;
}
