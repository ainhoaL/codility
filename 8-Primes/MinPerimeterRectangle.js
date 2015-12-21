//Lesson 8 - prime and composite numbers
//MinPerimeterRectangle
//Find the minimal perimeter of any rectangle whose area equals N.

function solution(N) {
    var i = 1;
    var minPerimeter = Number.MAX_SAFE_INTEGER;

    var A, B;
    while (i * i <= N) {
        if (N % i === 0) {
            A = i;
            B = N / i;
            minPerimeter = Math.min(2 * (A + B), minPerimeter);
        }
        i++;
    }

    return minPerimeter;
}
