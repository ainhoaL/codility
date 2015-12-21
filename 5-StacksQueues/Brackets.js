//Lesson 5 - Stacks and Queues
//Brackets
//Determine whether a given string of parentheses is properly nested.

function solution(S) {
    if (S.length === 0) {
        return 1;
    } else if (S.length % 2 == 1) {
        return 0;
    }

    var stack = [];

    for (var i = 0; i < S.length; i++) {
        if (S[i] === "{" || S[i] === "(" || S[i] === "[") {
            stack.push(S[i]);
        } else {
            if (S[i] === "}" && stack[stack.length - 1] === "{") {
                stack.pop();
            } else if (S[i] === ")" && stack[stack.length - 1] === "(") {
                stack.pop();
            } else if (S[i] === "]" && stack[stack.length - 1] === "[") {
                stack.pop();
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}
