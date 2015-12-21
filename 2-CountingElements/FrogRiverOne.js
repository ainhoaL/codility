//Lesson 2 - Counting Elements
//FrogRiverOne
//Find the earliest time when a frog can jump to the other side of a river.

function solution(X, A) {

    //Store the first instance of a leaf falling on a position
    var timeLeafFallsForPosition = [];
    for (var i = 0; i < A.length; i++) {
        var position = A[i];
        var second = i;
        //Only store this leaf if it is not already in the array and is under X
        if (!timeLeafFallsForPosition[position] && position <= X) {
            timeLeafFallsForPosition[position] = second;
        }
    }

    var timeToFallInPosition = -1;
    for (var j = 1; j <= X; j++) {
        //there never is a leaf in that position, frog can't cross
        if (typeof timeLeafFallsForPosition[j] === "undefined") {
            return -1;
        } else if (timeToFallInPosition < timeLeafFallsForPosition[j]) {
            timeToFallInPosition = timeLeafFallsForPosition[j];
        }
    }
    return timeToFallInPosition;
}
