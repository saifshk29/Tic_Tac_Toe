const player_info = document.querySelector("[playerinfo]");
const newgame_button = document.querySelector("[newgame]");
const boxes = document.querySelectorAll(".box");


let currentplayer ;
let gridgame ;
const winningposition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function gameinit(){
    currentplayer = "X";
    gridgame = ["","","","","","","","",""];
    newgame_button.classList.remove("active");
    player_info.innerText = `Current Player: ${currentplayer}`;
    boxes.forEach((box,index)=>{
            box.innerText ="";
            boxes[index].style.pointerEvents ="all";
            box.classList = `box box${index+1}`;
    })
}
gameinit();



boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

function playerswap(){
    if(currentplayer === "X"){
        currentplayer = "O";
    }
    else{
        currentplayer="X";
    }
        

    player_info.innerText = `Current Player: ${currentplayer}`;
}

function gameover(){
    let winner = "";
    winningposition.forEach((position) => {
        if((gridgame[position[0]]!="" || gridgame[position[1]]!="" || gridgame[position[2]]!="")
             && (gridgame[position[0]]=== gridgame[position[1]]) && (gridgame[position[1]] === gridgame[position[2]])){
        
                if(gridgame[position[0]] === "X"){
                    winner = "X";
                }
                else{
                    winner = "O";
                } 
                boxes.forEach((box) => {
                    box.style.pointerEvents ="none";
                })
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                player_info.innerText = `Winner is ${winner}`;
                newgame_button.classList.add("active");

                
            }   
    
        let fillcount =0;
        gridgame.forEach((box)=>{
            if(box!=""){
                fillcount++;
            }
        }
            
            );
        if(fillcount===9){
            player_info.innerText="Game Tied!!";
            newgame_button.classList.add("active");
        }
    
    })}

function handleClick(index){
        if(gridgame[index] === ""){
            boxes[index].innerText = currentplayer;
            gridgame[index] = currentplayer;
            boxes[index].style.pointerEvents ="none";
            playerswap();
            gameover();
        };
}
    newgame_button.addEventListener("click",gameinit);