console.log("Working");
let board = [
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 7, 8, 9, 0, 0, 0,],
    [0, 0, 1, 2, 3, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 5, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0,]
];
function knightMoves(positionA, positionB){
    console.log("PosA:",positionA);
    console.log("PosB:",positionB);
    let moves = [];
    let possibleMoves = [];
    moves.push([positionA[0]-2,positionA[1]-1]);
    moves.push([positionA[0]-1,positionA[1]-2]);

    moves.push([positionA[0]+1,positionA[1]-2]);
    moves.push([positionA[0]+2,positionA[1]-1]);

    moves.push([positionA[0]+2,positionA[1]+1]);
    moves.push([positionA[0]+1,positionA[1]+2]);

    moves.push([positionA[0]-1,positionA[1]+2]);
    moves.push([positionA[0]-2,positionA[1]+1]);

    moves.forEach(M => {
        //console.log(M);
        if((M[0]>= 0 && M[0]<=7)&&(M[1]>= 0 && M[1]<=7)){
            possibleMoves.push(M);
        }
    });
    console.log("---------");
    return possibleMoves;
}
let moves = knightMoves([4,1], [2,5]);
console.log(moves);