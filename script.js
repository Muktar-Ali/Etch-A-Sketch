const container = document.querySelector("#container");
let content = document.createElement("div");

for(let i =0 ;  i < 4; i++){
    for(let j= 0 ; j < 4;j++){
    content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    }
}




