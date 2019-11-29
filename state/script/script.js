const rr00 = document.getElementById('r00');
const rr01 = document.getElementById('r01');
const rr02 = document.getElementById('r02');
const rr10 = document.getElementById('r10');
const rr11 = document.getElementById('r11');
const rr12 = document.getElementById('r12');
const rr20 = document.getElementById('r20');
const rr21 = document.getElementById('r21');
const rr22 = document.getElementById('r22');
const state = document.getElementById('state');

fild = [3];
let X;
let O;
fild[0] = ['', '', ''];
fild[1] = ['', '', ''];
fild[2] = ['', '', ''];
// const state ={
//     noll:'O',
//     crestic:'X'
// }
let score = 0;

function vinX(){
    if((fild[0][0]=='X' && fild[0][1]=='X' && fild[0][2]=='X') || (fild[1][0]=='X' && fild[1][1]=='X' && fild[1][2]=='X') ||
    (fild[2][0]=='X' && fild[2][1]=='X' && fild[2][2]=='X') || (fild[0][0]=='X' && fild[1][1]=='X' && fild[2][2]=='X') ||
    (fild[0][2]=='X' && fild[1][1]=='X' && fild[2][0]=='X') || (fild[0][0]=='X' && fild[1][0]=='X' && fild[2][0]=='X') ||
    (fild[0][1]=='X' && fild[1][1]=='X' && fild[2][1]=='X') || (fild[0][2]=='X' && fild[1][2]=='X' && fild[2][2]=='X')){
        alert('win X');
    }
}

function vinO(){
    if((fild[0][0]=='O' && fild[0][1]=='O' && fild[0][2]=='O') || (fild[1][0]=='O' && fild[1][1]=='O' && fild[1][2]=='O') ||
    (fild[2][0]=='O' && fild[2][1]=='O' && fild[2][2]=='O') || (fild[0][0]=='O' && fild[1][1]=='O' && fild[2][2]=='O') ||
    (fild[0][2]=='O' && fild[1][1]=='O' && fild[2][0]=='O') || (fild[0][0]=='O' && fild[1][0]=='O' && fild[2][0]=='O') ||
    (fild[0][1]=='O' && fild[1][1]=='O' && fild[2][1]=='O') || (fild[0][2]=='O' && fild[1][2]=='O' && fild[2][2]=='O')){
        alert('win O');
    }
}

rr00.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){
       if(score%2==0){
        state.innerHTML = "следующий ход X";
        rr00.innerHTML = 'O';
        fild[0][0] = 'O';
        }
        else{
            rr00.innerHTML ='X';
            fild[0][0] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO(); 
    }
})

rr01.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr01.innerHTML = 'O';
            fild[0][1] = 'O';
        }
        else{
            rr01.innerHTML ='X';
            fild[0][1] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr02.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr02.innerHTML = 'O';
            fild[0][2] = 'O';
        }
        else{
            rr02.innerHTML ='X';
            fild[0][2] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr10.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){    
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr10.innerHTML = 'O';
            fild[1][0] = 'O';
        }
        else{
            rr10.innerHTML ='X';
            fild[1][0] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr11.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){    
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr11.innerHTML = 'O';
            fild[1][1] = 'O';
        }
        else{
            rr11.innerHTML ='X';
            fild[1][1] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr12.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){   
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr12.innerHTML = 'O';
            fild[1][2] = 'O';
        }
        else{
            rr12.innerHTML ='X';
            fild[1][2] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr20.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr20.innerHTML = 'O';
            fild[2][0] = 'O';
        }
        else{
            rr20.innerHTML ='X';
            fild[2][0] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr21.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){    
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr21.innerHTML = 'O';
            fild[2][1] = 'O';
        }
        else{
            rr21.innerHTML ='X';
            fild[2][1] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})
rr22.addEventListener('click', () => {
    score++;
    console.log(score);
    if(score<=9){
        if(score%2==0){
            state.innerHTML = "следующий ход X";
            rr22.innerHTML = 'O';
            fild[2][2] = 'O';
        }
        else{
            rr22.innerHTML ='X';
            fild[2][2] = 'X';
            state.innerHTML = "следующий ход O";
        }
        vinX();
        vinO();
    }
})


// var arr = [[1, 2, 3], 1, 2, [1, 2, 3]];
//     var newArr = arr.map(function recur(el) {
//       return !el.forEach? el * 3:  el.map(recur);
//     })
// console.log(newArr);


