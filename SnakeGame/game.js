// myCanvas영역
 let canvas = $("#myCanvas")[0];
 
 let ctx = canvas.getContext("2d");
 let w = $("#myCanvas").width();
 let h = $("#myCanvas").height();
 // 뱀과 먹이의 크기
 let sq = 15;
 let food;
 let snake;
 // 게임 시작 후 처음 움직이는 방향설정
 let d = "RIGHT";
 
// 뱀 속도

let velocityX = 0;
let velocityY = 0;

 // 키보드 이벤트

window.onload = function(){

    document.addEventListener("keyup", changeDirection);
}


function changeDirection(e){
    if( e.code ==  "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    } 
    else if( e.code ==  "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }

    else if( e.code ==  "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }

    else if( e.code ==  "ArrowUp"){
        velocityX = 1;
        velocityY = 0;
    }
}
//먹이의 위치를 랜덤으로 추출
function placeFood() {
    food = {
     // 해당 영역의 너비만큼 sq의 길이를 빼준다 
     x : Math.round(Math.random()*(w-sq)/sq),
     y : Math.round(Math.random()*(h-sq)/sq)
    }
   }
  
   // 뱀의 위치를 랜덤으로 추출
   function placeSnake() {
    snake = {
     x : Math.round(Math.random()*(w-sq)/sq),
     y : Math.round(Math.random()*(h-sq)/sq)
    }
   }
   
   // 위치에 맞춰 색을 넣어준다.
   function paint_cell(x,y, color){
    ctx.fillStyle=color;
    ctx.fillRect(x*sq,y*sq,sq,sq);
    ctx.strokeStyle="white";
    ctx.strokeRect(x*sq,y*sq,sq,sq);
   }
   
   // food와 snake의 위치를 최초 세팅
   placeFood();
   paint_cell(food.x, food.y, "grey");
   placeSnake();
   paint_cell(snake.x, snake.y, "green");
  

 





 


 
