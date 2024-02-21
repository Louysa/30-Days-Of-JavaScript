let firstName = "Dogan";
let lastName = "Oz";
let age = 20;

console.log(typeof firstName);  // string
console.log(typeof lastName);   // string   
console.log(typeof age);    // number

console.log("************************");
console.log(typeof 10 == typeof "10"); // false
console.log(typeof 10 === typeof "10"); // false
console.log("************************");
console.log(parseInt('9.8') == 10); // true
console.log(parseInt('9.8') === 10); //false
console.log("************************");
console.log(4>3); // true
console.log(4>=3); // true
console.log(4<3); // false
console.log(4<=3); // false
console.log(4==4); // true
console.log(4===4); // true
console.log(4 != 4); // false
console.log(4 !== "4");  // true
console.log(4 != "4"); // false
console.log(4!==4); // false
console.log(4 == '4'); // true
console.log(4==='4'); // false
console.log("************************");
console.log(4>3 && 10<12); // true
console.log(4>3 && 10>12); // flase
console.log(4>3 || 10<12); // true
console.log(4>3 || 10>12);  // true
console.log(!(4>3)); // false
console.log(!(4<3)); // true
console.log(!(false));   // true
console.log(!(4>3 && 10<12)); // false
console.log(!(4>3 && 10>12)); // true
console.log(!(4===4)); // false
console.log("************************");
const now =new Date();
const year = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();
const time = now.getTime();

console.log(year);
console.log(month);
console.log(date);
console.log(day);
console.log(hour);
console.log(minute);
console.log(time);
console.log("************************");