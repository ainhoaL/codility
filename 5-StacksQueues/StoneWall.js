//Lesson 5 - Stacks and Queues
//StoneWall
//Cover "Manhattan skyline" using the minimum number of rectangles.

function solution(H) {

    var steps = [H[0]];

    var blocks = 1;

    for (var i = 1; i < H.length; i++) {
        //Remove elements from the stack until we find a previous height that was the same or less
        while (steps.length > 0 && steps[steps.length - 1] > H[i]) {
            steps.pop();
        }
        //If the found height was shorter than the current one, then we need a new block
        if (steps.length === 0 || (steps.length > 0 && steps[steps.length - 1] !== H[i])) {
            steps.push(H[i]);
            blocks++;
        }
    }

    return blocks;

}
