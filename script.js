const container = document.querySelector("#container");

for(let i =0 ;  i < 4; i++){
    for(let j= 0 ; j < 4;j++){
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    content.addEventListener('mouseenter', () => {
    content.style.backgroundColor = "lightblue";
});
  
    }
     
}

 



