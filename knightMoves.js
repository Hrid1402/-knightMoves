console.log("Working");

class Square{
    constructor(data, nextSquare=null){
        this.data = data;
        this.nextSquare = nextSquare;
    };
}
class Graph{
    constructor(){
        this.list = [];
    };
    buildList(array){
        array.forEach(element => {
            this.addSquare(element);
        });
    };
    addSquare(element){
        this.list.push(new Square(element));
    }
    getPossibleMoves(positionA){
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
            if((M[0]>= 0 && M[0]<=7)&&(M[1]>= 0 && M[1]<=7)){
                possibleMoves.push(M);
            }
        });
        return possibleMoves;
    }
    getShortPath(positionA, positionB){
        const PM = this.getPossibleMoves(positionA);
        this.buildList(PM);
        for(let i = 0; i < this.list.length; i++){
            this.list[i].nextSquare = this.getPossibleMoves(this.list[i].data);
            console.log(this.getPossibleMoves(this.list[i].data));
        }
    }
}
const myGraph = new Graph;

//let moves = myGraph.getPossibleMoves([3,3]);
//myGraph.buildList(moves);
myGraph.getShortPath([3,3], [2,5]);
console.log(myGraph.list);