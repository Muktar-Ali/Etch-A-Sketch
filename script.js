const container = document.querySelector("#container");
const squares = document.getElementById("my-button");
squares.addEventListener('click' , () =>{
    let numSquares = parseInt(prompt("How many squares do you want?"));
    if(numSquares >= 100){
        alert("Enter number less than 100");
        return;
    }
    let squareSize = (800 / numSquares);
    for(let i = 0 ;  i < numSquares; i++){
        for(let j= 0 ; j < numSquares;j++){
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.height = `${squareSize}px`;
        content.style.width = `${squareSize}px`;
        container.appendChild(content);
        content.addEventListener('mouseenter', () => {
        content.style.backgroundColor = "lightblue";
            });
        }  
    }
});



 



