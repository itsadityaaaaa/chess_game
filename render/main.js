const Root_div = document.getElementById("root");
function initGameRender(data){
    data.forEach((element) => {
        const rowEl = document.createElement("div");
           
        element.forEach((square) => {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add(square.color);
           
            
        });
        rowEl.classList.add("squarerow");
        Root_div.appendChild(rowEl);

    });

}
export {initGameRender};