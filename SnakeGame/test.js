// 

let blocksize = 25;
let rows  = 20;
let cols = 20;
let board;
let context;

// 뱀 머리 

let snakeX = blocksize * 5 ;
let snakeY = blocksize * 5 ; 


let velocityX = 0;
let velocityY = 0;

window.onload = function(){
    board  = document.getElementById("board")
    board.height = rows * blocksize;
    board.widths = cols * blocksize;
    context = board.getContext("2d")

    placeFood();
    document.addEventListener("keyup", changeDirection)
   // update();
   setInterval( update, 1000/10 );

}

function changeDirection(e){
    if(e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }

    else if(e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }

    else if(e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }

    else if(e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}


// 뱀 먹이

let foodX ;
let foodY ;

// 업데이트 - 이동시 마다 위치, css 변경 
function update(){
    context.fillstyle ="black";
    context.fillRect(0,0, board.widths , board.height);

    // 뱀 업데이트  
    context.fillstyle = "lime";
    snakeX += velocityX;
    snakeY += velocityY;
    context.fillRect(snakeX, snakeY , blocksize , blocksize);   // ( x , y , width , height ) 

    // 먹이 업데이트 
    context.fillstyle="Red";
    context.fillRect(foodX,foodY, blocksize,blocksize)

}

// 먹이 위치 ( 랜덤  )

function placeFood(){
    foodX = Math.floor( Math.random() * cols ) * blocksize;
    foodY = Math.floor( Math.random() * rows ) * blocksize;
    
    //1757
}
