var myNanme = "Masum Hosen";
var selectPTag = document.querySelector("p");
var selctorForLogo = document.querySelector(".logo");
selctorForLogo.addEventListener("mouseover",()=>{
    // alert(myNanme)
    selectPTag.innerHTML= myNanme;
});

selctorForLogo.addEventListener("mouseover",added);
function added(){
    selctorForLogo.classList.add("logojs");
}

selctorForLogo.addEventListener("mouseover",rem);
function rem(){
    selctorForLogo.classList.remove("logo");
}

selctorForLogo.addEventListener("mouseout",remadd);
function remadd(){
    selectPTag.innerHTML= "MH";
    selctorForLogo.classList.add("logo");
}
var a = 20;
var b = 22;
var c = 30;
if(a <! b){
    console.log("This is not True. Your Hight Number is : 20 ");
}else if(b > c){
    console.log("This is not True. Your Hight Number is : 22 ");
}
else if(c > b){
    console.log("This is not True. Your Hight Number is : 30 ");
}
else{
    console.log("This is Wrong Number ");
}


// switch:
var weekDay = 'Friday';
switch (weekDay) {
    case 'Sarurday':
        console.log('Saturday! Today is close')
        break;
        case 'Sunday':
        console.log('Sunday! Today is Normal day')
        break;
        case 'Monday':
        console.log('Monday! Today is Normal day')
        break;
        case 'Tuesday':
        console.log('Tuesday! Today is Normal day')
        break;
        case 'Wednessday':
        console.log('Wednessday! Today is Normal day')
        break;
        case 'Thursday':
        console.log('Thursday! Today is Normal day')
        break;
        case 'Friday':
        console.log('Friday! Today is close.')
        break;
    default:
        console.log('Not a Day')
}
// for loop
for (var i = 0; i <= 10; i++){
    console.log('Go ' + i + ' step');
}

// do while loop
var num = 15;
do{
    console.log("Inside The Loop, Num is :" + num);
    num ++;
}while (1 <! num); 
console.log("Outside the loop");

// while loop
var x = 10;
while (x < 101) {
   if (x === 55) {
    break;
   }
    console.log("Inside the while loop.");
   x++;
}
console.log("Out side the while loop");

// Arrey :
var arrey = new Array(1,2,3,5,67,);
console.log("Arrey is " + Array.isArray(arrey));
// arrey declired is present style:
var arreyName = ['Rahim','Karim','Rafiq','Sofik'];
for (let index = 0; index < arreyName.length; index++) {
    console.log("Name: " + arreyName[index]);  
}
console.log(arreyName.indexOf('Rafiq'));

// Object :

var rahim = {
    fullName : "Rahim",
    age : 22,
    job : "Govt Servicer"
}
console.log(rahim);
rahim.job = "Student";
console.log(rahim);
rahim.welcomeMgs = function(){
    console.log("Hello Their")
}
console.log(rahim);
rahim.welcomeMgs();
for(item in rahim){
    console.log(item)
}

// obj in array
var abObj = {
    name: 'w',
    ary:['a','v']
}
console.log(abObj.ary);
// function detalis
function funcName(){
    console.log('Hello I am from the function')
}
funcName(); // This is Function Statement.

var funcVar = function funcName(){
    console.log('Hello I am from the function in var.')
}
funcVar(); //THis is Function Expression.

var funcSum = function(a,b){
    var sum = a + b;
    return sum;
}
console.log("sumMachin = " + funcSum(2,5));
console.log("sumMachin = " + funcSum(9,5));

first();
function first(){
    var ax = 10;
    console.log("Last Function Statement " + ax)
    console.log("My Name is " + myNanme)
}
// (IIFE) full meaing is 'Immediately Invoked Function Expression.' = '(()=>{})()'
((firstNum,scendNum)=>{
    sum = firstNum + scendNum;
    console.log("Immediately Invoked Function Expression. " + "Sum = " + sum);
})(45,79);

// Problem solving hear:
function getRandomNumber (number){
    return Math.floor((Math.random()*number))+1;
}
console.log(getRandomNumber(6));

// ludo js ::
// player finding hear
let player1Finding = document.querySelector("p.player1");
let player2Finding = document.querySelector("p.player2");

// player name diclear hear
let player1 = 'Player1';
let player2 = 'Player2';
// player name Edite hear
function editNames(){
    player1 = prompt('Change Player1 Name ');
    player2 = prompt('Change Player2 Name ');
    if(player1.length < 1 || player2.length < 1){
        alert('please enter valid name ');
        return;
    }
    player1Finding.innerHTML = player1;
    player2Finding.innerHTML = player2;
}
// roll The dice function hear

function rollTheDice(){
    let diceNum1 =document.querySelector('.img1');
    let diceNum2 =document.querySelector('.img2');
    diceNum1.setAttribute("src","diceroll.gif");
    diceNum2.setAttribute("src","diceroll.gif");

    let result = document.querySelector('h1')
    result.innerHTML = " ";
    setTimeout(() => {
        let randomNum1 = Math.floor(Math.random() *6)+1;
        let randomNum2 = Math.floor(Math.random() *6)+1;
        diceNum1.setAttribute('src','dice' + randomNum1 + '.png');
        diceNum2.setAttribute('src','dice' + randomNum2 + '.png');

        // determine the winner
        if(randomNum1 === randomNum2){
            result.innerHTML = "Draw!"
        }
        else if (randomNum1 < randomNum2){
            result.innerHTML = (player2 + " WINS!")
        }
        else{
            result.innerHTML = (player1 + " WINS!")
        }
    }, 2500);
}

// ludo is end
const solution = number => {
    let sum = 0;
    for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  };
  console.log(solution(20));
