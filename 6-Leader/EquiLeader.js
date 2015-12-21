//Lesson 6 - Leader
//EquiLeader
//Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.

function solution(A) {
    //find leader!
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
        return 0;
    }

    //Check we actually found a leader
    var candidate = value;
    var leaderCount = 0;

    for (var j = 0; j < A.length; j++) {
        if (A[j] === candidate) {
            leaderCount++;
        }
    }

    if (leaderCount <= A.length / 2) {
        return 0;
    }

    //Now find the number of equi leaders

    var totalIndexesLeader = 0;
    var leftCount = 0;
    var rightCount = leaderCount;

    for (var k = 0; k < A.length; k++) {
        if (A[k] === candidate) {
            leftCount++;
            rightCount--;
        }
        if ((leftCount > (k + 1) / 2) && (rightCount > (A.length - k - 1) / 2)) {
            totalIndexesLeader++;
        }
    }

    return totalIndexesLeader;
}
