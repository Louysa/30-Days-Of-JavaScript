const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
console.log('---------------------------------');
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);
console.log('---------------------------------');
const {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);
console.log('---------------------------------');


for(const {name, scores, skills, age} of users) {
  console.log(name, scores, skills, age);
}
console.log('---------------------------------');

for(const {name, scores, skills, age} of users) {
    if(skills.length < 2) {
        console.log(name, scores, skills, age);
    }
  }
  console.log('---------------------------------');