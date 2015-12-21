//Lesson 6 - Leader
//Dominator
//Find an index of an array such that its value occurs at more than half of indices in the array.

function solution(A) {
    var size = 0;
    var value;

    for (var i = 0; i < A.length; i++) {
        if (size === 0) {
            size++;
            value = A[i];
        } else {
            if (value !== A[i]) {
                size--;
            } else {
                size++;
            }
        }
    }

    if (size <= 0) {
        return -1;
    }
    var candidate = value;
    var count = 0;
    var index;

    for (var j = 0; j < A.length; j++) {
        if (A[j] === candidate) {
            count++;
            index = j;
        }
    }
    
    return count > A.length / 2 ? index : -1;
}
