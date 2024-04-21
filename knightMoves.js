function Node(pos, path) {
    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
        return null;
    }
    return { pos, path };
}
function knightMoves([x, y], [a, b]){
    if(a < 0 || a > 7 || b < 0 || b > 7 || x < 0 || x > 7 || y < 0 || y > 7){
        console.log("Invalid values");
        return;
    }
    let q = [Node([x, y], [[x, y]])];
    let currentNode = q.shift();
    while (currentNode.pos[0] !== a || currentNode.pos[1] !== b){
        let moves = [
            [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
            [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
            [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
            [currentNode.pos[0] - 1, currentNode.pos[1] + 2]
        ];
        moves.forEach((move) => {
            let node = Node(move, currentNode.path.concat([move]));
            if (node) {
                q.push(node);
            }
        });
        currentNode = q.shift();
    }
    console.log(`=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`);
    currentNode.path.forEach((pos) => {
        console.log(pos);
    });
}
knightMoves([3,3], [7,7]);