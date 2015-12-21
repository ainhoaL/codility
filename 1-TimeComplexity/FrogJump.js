//Lesson 1 - Time Complexity
//FrogJmp
//Count minimal number of jumps from position X to Y.

function solution(X, Y, D) {
    var jumps = Math.ceil((Y - X) / D);

    return jumps;
}
