//Lesson 4 - Sorting
//MaxProductOfThree
//Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).

function solution(A) {
    A.sort(function(a,b){return a - b});

    //The biggest product should be the multiplication of the largest numbers in the array
    var maxRightSideProduct = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
    //In case there is a double negative situation
    var maxDoubleNegativeProduct = A[0] * A[1] * A[A.length - 1];

    return maxRightSideProduct >= maxDoubleNegativeProduct ? maxRightSideProduct : maxDoubleNegativeProduct;
}
