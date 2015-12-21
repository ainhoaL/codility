//Lesson 5 - Stacks and Queues
//Nesting
//Determine whether given string of parentheses is properly nested.

function solution(S) {
    if (S.length === 0) {
        return 1;
    } else if (S.length % 2 === 1) {
        //Must consist of pairs of elements
        return 0;
    }

    var leftToMatch = 0;

    for (var i = 0; i < S.length; i++) {
        if (S[i] === ")") {
            if (leftToMatch > 0) {
                leftToMatch--;
            } else {
                return 0;
            }
        } else {
            leftToMatch++;
        }
    }

    return leftToMatch === 0 ? 1 : 0;
}
