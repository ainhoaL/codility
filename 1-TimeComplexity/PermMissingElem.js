//Lesson 1 - Time Complexity
//PermMissingElem
//Find the missing element in a given permutation.

function solution(A) {
    var N = A.length;

    var total = A.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    //remove the N+1 element - we only want the sum of 1 - N elements.
    total -= N + 1;

    //Calculate what the sum of 1 - N should be
    var totalShouldBe = (N * (N + 1)) / 2;

    var missingNumber = totalShouldBe - total;

    return missingNumber;
}
