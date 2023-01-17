
//
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context; 

// 뱀머리 좌표
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

// 뱀 몸통 
let snakeBody = [];

// 먹이 좌표
let foodX;
let foodY;

// 게임오버
let gameOver = false;

//점수
let score = 0; 

// 
window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); 

    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    setInterval(update, 1000/10); // 0.1초 마다 update 
}

// 업데이트 - 이동시 마다 위치,css 변경 
function update() {
    // 게임 오버시 
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // 뱀이 먹이를 먹었을 때 
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]); // 먹이 + 1 = 몸통 + 1 
        placeFood();

        // 점수표 
        score += 1
        document.getElementById("current").innerHTML = score;
        

    }

    // 뱀 몸통 이어붙이기 
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

     // 뱀 업데이트 
    context.fillStyle="lime";
    snakeX += velocityX * blockSize; // 뱀 속도 
    snakeY += velocityY * blockSize; // 뱀 속도 
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // 
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // 게임 오버 조건 
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("게임 오버! 당신의 점수는 =  "+ score);
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("게임 오버! 당신의 점수는 = "+ score);
        }
    }
}

// 키보드 이동 
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// 먹이 위치 
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}