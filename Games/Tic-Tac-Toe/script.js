var rst = document.querySelector('#bt');

var cell = document.querySelectorAll('td');

var turn = document.querySelector('#player');
turn.textContent = "X";

var win = document.querySelector('.winner');

function clrBoard(){
    for (var i = 0; i < cell.length; i++){
        cell[i].textContent = ''; 
    }
    c = 0;
    win.innerHTML = '';
    turn.textContent = "X";
}

rst.addEventListener('click',clrBoard);
//-------------------------------------------------------------------

function values(){
    if(this.textContent === ''){
        this.textContent = "X";
    }else if(this.textContent === "X") {
        this.textContent = "O";
    }else{
        this.textContent = ""
    }   
} 

function hello(){
    // alert("hi");
    if(cell[0].textContent != '' && cell[0].textContent == cell[1].textContent  && cell[0].textContent == cell[2].textContent){
        console.log(cell[0].textContent +"  winner");
        win.innerHTML = `<p>${cell[0].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);   
    }
    else if(cell[0].textContent != '' && cell[0].textContent == cell[4].textContent && cell[0].textContent == cell[8].textContent){
        console.log(cell[0].textContent +"  winner");
        win.innerHTML = `<p>${cell[0].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[2].textContent != '' && cell[2].textContent == cell[4].textContent && cell[2].textContent == cell[6].textContent){
        console.log(cell[2].textContent +"  winner");
        win.innerHTML = `<p>${cell[2].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[3].textContent != '' && cell[3].textContent == cell[4].textContent && cell[3].textContent == cell[5].textContent){
        console.log(cell[3].textContent +"  winner");
        win.innerHTML = `<p>${cell[3].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[6].textContent != '' && cell[6].textContent == cell[7].textContent && cell[6].textContent == cell[8].textContent){
        console.log(cell[6].textContent +"  winner");
        win.innerHTML = `<p>${cell[6].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[0].textContent != '' && cell[0].textContent == cell[3].textContent && cell[0].textContent == cell[6].textContent){
        console.log(cell[0].textContent +"  winner");
        win.innerHTML = `<p>${cell[0].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[1].textContent != '' && cell[1].textContent == cell[4].textContent && cell[1].textContent == cell[7].textContent){
        console.log(cell[1].textContent +"  winner");
        win.innerHTML = `<p>${cell[1].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(cell[2].textContent != '' && cell[2].textContent == cell[5].textContent && cell[2].textContent == cell[8].textContent){
        console.log(cell[2].textContent +"  winner");
        win.innerHTML = `<p>${cell[2].textContent} Won The Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
    else if(c==9){
        console.log("Tie")
        win.innerHTML = `<p>Tie Match<\p>`
        setTimeout(() => { clrBoard(); }, 1500);
    }
}

function valX(){
    
    if(this.textContent === '' && c%2 == 0){
        turn.innerHTML = 'O';
        this.textContent = "X";
        c=c+1;
        hello();
    }else if(this.textContent === '' && c%2 != 0){
        this.textContent = "O";
        turn.textContent = 'X';
        c=c+1;
        hello();
    }else{
        alert("invalid move");
    }   

    
    
} 

function valO(){
    if(this.textContent === ''){
        this.textContent = "0";
    }else{
        alert("invalid move");
    }   
} 

c=0;
for(var j = 0;j<cell.length;j++){
    cell[j].addEventListener('click',valX);
}

