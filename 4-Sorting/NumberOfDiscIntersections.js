//Lesson 4 - Sorting
//NumberOfDiscIntersections
//Compute the number of intersections in a sequence of discs.

//Version 1 - 82% - O(N*2)

function solution1(A) {

    var N = A.length;
    var intersectingCircles = 0;

    for (var j = 0; j < N; j++) {
        var forwardReach = j + A[j];
        //If this circle reaches further away than the number of circles, then it intersects all circles between j and the last one
        //Otherwise it only intersects as far as its radious goes
        var circles = forwardReach >= N ? (N - 1 - j) : A[j];
        intersectingCircles += circles;

        //Now let's see if the next circles intersect this one
        for (var k = forwardReach + 1; k < N; k ++) {
            var backReach = k - A[k];
            if (backReach <= forwardReach) {
                intersectingCircles++;
            }
        }
        if (intersectingCircles > 10000000) {
            return -1;
        }
    }

    return intersectingCircles;

}

//Version 2 - 100% O(n*logN) or O(N)

function solution2(A) {
    var intersections = 0;
    var discsStartingAt = Array.apply(null, Array(A.length)).map(Number.prototype.valueOf,0);
    var discsEndingAt = Array.apply(null, Array(A.length)).map(Number.prototype.valueOf,0);

    for (var i = 0; i < A.length; i++) {
        var startingPoint = (i - A[i]) > 0 ? i - A[i] : 0;
        var endingPoint = (i + A[i]) > A.length ? A.length - 1 : i + A[i];
        discsStartingAt[startingPoint]++;
        discsEndingAt[endingPoint]++;
    }

    var activeDiscs = 0;
    for (var j = 0; j < A.length; j++) {
        var discsStartingHere = discsStartingAt[j];
        intersections += activeDiscs * discsStartingHere + (discsStartingHere * (discsStartingHere - 1)) / 2;
        if (intersections > 10000000) {
            return -1;
        }
        activeDiscs += discsStartingHere - discsEndingAt[j];
    }
    return intersections;
}
