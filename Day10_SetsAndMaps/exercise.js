const a = [4,5,8,9];
const b = [3,4,5,7];
const countries = ['Finland', 'Sweden', 'Norway'];

/*const setA = new Set();
console.log(setA);
const setB = new Set();
for (let i = 0; i < 10; i++) {
  setB.add(i);
}
console.log(setB);
setB.delete(3);
console.log(setB);
setB.clear();
console.log(setB);
*/

const setA = new Set(a);
const setB = new Set(b);

let c = a.filter((num) => !setB.has(num));
const setUnion = new Set(c);
console.log(setUnion);

let d = a.filter((num) => setB.has(num));
const setIntersection = new Set(d);
console.log(setIntersection);

