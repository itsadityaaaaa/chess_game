
function square(color, id, pieces) {
    return {color, id, pieces};
}

function squarerow(rowId) {
    const squarerow=[];
    const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
    

    if (rowId % 2 == 0) {
        a.forEach((element, index) => {
            if(index %2 == 0){
                squarerow.push(square("white", element+rowId, "null"));
            }
            else{
                squarerow.push(square("black", element+rowId, "null"));

            }
            
            
        });
        
    }
    else {
        a.forEach((element, index) => {
            if(index %2 == 0){
                squarerow.push(square("black", element+rowId, "null"));
            }
            else{
                squarerow.push(square("white", element+rowId, "null"));

            }
        });
            
    }
    return squarerow;

}
function initGame() {
    return [
        squarerow(8),
        squarerow(7),
        squarerow(6),
        squarerow(5),
        squarerow(4),
        squarerow(3),
        squarerow(2),
        squarerow(1)];
}
export { initGame };

