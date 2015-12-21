//Lesson 3 - Prefix Sums
//MinAvgTwoSlice
//Find the minimal average of any slice containing at least two elements.

function solution(A) {
    //the minimum slice must be a 2 or 3 elements slice (any slice is composed of one or more of these).

    var prefixes = [0];
    for (var i = 1; i <= A.length; i++) {
         prefixes[i] = prefixes[i - 1] + A[i - 1];
    }

    var min = Number.MAX_SAFE_INTEGER;
    var minP, threeSlice, twoSlice;
    for (var p = 0; p < A.length - 1; p++) {
        //Calculate next 3 and 2 element slices
        if (p < A.length - 2) {
            threeSlice = (prefixes[p + 3] - prefixes[p]) / 3;
            if (threeSlice < min) {
                min = threeSlice;
                minP = p;
            }
        }
        twoSlice = (prefixes[p + 2] - prefixes[p]) / 2;
        if (twoSlice < min) {
            min = twoSlice;
            minP = p;
        }
    }
    return minP;
}
