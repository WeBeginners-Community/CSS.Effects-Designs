let inputDir ={x:0,y:0};

//  WE USE CONST SO WE CANNOT MAKE NEW VARIABLE BY THIS NAME MISTAKENLY
const foodSound = new Audio('food.mp3')
const gameOverSound = new Audio('gameover.mp3')
const moveSound = new Audio('move.mp3')
const musicSound = new Audio('music.mp3')

let speed =7;
let lastPaintTime=0;

let score =0;

// in js origin is at left top corner 
let snakeArr = [
    {x:13 , y:15} // Position of head
]

 food = {x:6 , y:7};



// Game Functions
// WE HAVE CREATED A GAME LOOP HERE
// ctime MEANS CURRENT TIME
function main (ctime){
    // console.log(ctime);

    window.requestAnimationFrame(main);

    //  1000 IS DIVIDED BCOZ WE GET RESULT IN MILLI SECONDS
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }

    lastPaintTime=ctime;
    musicSound.play();

    gameEngine();
}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
            
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
        
    }
        
    return false;
}

function gameEngine(){
    // Part 1 - Updating snake array & food


    if(isCollide(snakeArr)){
        score = 0 ;
        scoreBox.innerHTML= "Score : " + 0;
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over , Press Any Key To Play Again !!!")
        snakeArr = [{x:13 , y:15}]; 
        musicSound.play();
    }

    // if you have eaten the food , increment score & give new food

    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        score +=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiScoreBox.innerHTML = "Hiscore: " + hiscoreval;
        }
        scoreBox.innerHTML= "Score : " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        // to generate random number
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}

    }


    // Moving the snake

    // bcoz we want snakes last 2nd element
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        // we add ... as we dont want any reference problem & if we dont add this then
        //  at the end all elements of array will start pointing 1 element only
        snakeArr[i+1]={...snakeArr[i]};

    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // Part 2 - Displaying snake & food

    // Displaying snake
    board.innerHTML='';
    // for each takes an arrow function
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

    })

    // Displaying food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}



// Main Logic
// WE CAN ALSO USE SETINTERVAL FOR LOOP BUT WE NEED TO USE REQUEST ANIMATION FRAME FOR BEST QUALITY
musicSound.play();
let hiscore = localStorage.getItem('hiscore');

if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiScoreBox.innerHTML = "HiScore: " + hiscore;
}

window.requestAnimationFrame(main);

window.addEventListener('keydown',e=>{
    inputDir = {x:0,y:1} // start the game if any key is pressed
    moveSound.play();

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=  0 ;
            inputDir.y= -1 ;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x= 0 ;
            inputDir.y= 1 ;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x= -1 ;
            inputDir.y=  0 ;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x= 1 ;
            inputDir.y= 0 ;
            break;

        default:
            break;
    }

})