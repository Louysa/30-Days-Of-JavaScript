function solveLinEquation(a,b,c,xValue){
    let y = (-c - a*xValue)/b;
    return y;
}
console.log(solveLinEquation(1,2,3,4));


function solveQuadEquation(a,b,c){
    let delta = b*b - 4*a*c;
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta))/(2*a);
        let x2 = (-b - Math.sqrt(delta))/(2*a);
        return [x1,x2];
    }else if(delta === 0){
        let x = -b/(2*a);
        return x;
    }else{
        return 'No solution';
    }
}
console.log(solveQuadEquation(1,4,4));
function printArray(arr){
    for (var elenent of arr){
        console.log(elenent);
    }
}
printArray(['a','b','c','d']);

function showDateTime(){
    let now = new Date();
    return now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes(); 
}
console.log(showDateTime());
function swapValue(a,b){
    let temp = a;
    a = b;
    b = temp;
}
let a = 3;
let b = 4;
swapValue(a,b);
console.log(a,b);
function reverseArray(arr){
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1,2,3,4,5]));
function capitalizeArray(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}
console.log(capitalizeArray(['a','b','c','d']));
function addItem(item){
    let arr = [];
    arr.push(item);
    return arr;
}
console.log(addItem('e'));
function removeItem(arr){
    arr.pop();
    return arr;
}
console.log(removeItem(['a','b','c','d']));
function sumOfNumbers(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}   
console.log(sumOfNumbers(10));
function sumOfOdds(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if(i%2 !== 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(10));
function sumOfEvens(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if(i%2 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvens(10));
function evensAndOdds(n){
    let even = 0;
    let odd = 0;
    for (let i = 0; i <= n; i++) {
        if(i%2 === 0){
            even += i;
        }else{
            odd += i;
        }
    }
   console.log("The sum of even numbers is " + even + " and the sum of odd numbers is " + odd);
}
evensAndOdds(10);   
function sum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6,7,8,9));
function randomUserIp(){
    let ip = "";
    for(let i = 0; i<4; i++){
        ip += Math.floor(Math.random()*256);
        if(i < 3){
            ip += ".";
        }
    }
    return ip;
}
console.log(randomUserIp());