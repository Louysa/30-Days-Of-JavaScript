const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages[0]," ",ages[ages.length-1]);
console.log(ages[ages.length/2-1]," ",ages[ages.length/2]);

let averageAge =ages.reduce((a,b)=>a+b,0)/ages.length;
console.log(averageAge);
let range = ages[ages.length-1]-ages[0];
console.log(range);
