var  boxes = document.querySelectorAll(".box");
var message = document.querySelector("#msg");
var reset = document.querySelector("#reset-btn")
var newgame = document.querySelector("#newgame")
var flag = true

reset.addEventListener("click",function(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML=""
        message.innerHTML=""
        flag 
    }
})
newgame.addEventListener("click",function(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML=""
        message.innerHTML=""
    }
})
boxes.forEach(function(box){
    
    box.addEventListener("click",function(){
       if(flag){
        box.innerHTML="X"
        flag=false
       }
       else{
        box.innerHTML="O"
        flag= true
       }
       box.disabled=true
       checkWinner()
    })
})

// making a multidimensional array to check the win patterns

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];
 function checkWinner(){
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
console.log("winner",pos1Val);
message.innerHTML =`winner is ${pos1Val}`;
for (let box of boxes){
    box.disabled = true
}

            }
        }
        
    }
}

checkWinner()