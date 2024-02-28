const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const sumOfPricesOnlyNumbers = products.filter((product) => typeof product.price === 'number').reduce((acc, cur) => acc + cur.price, 0);


console.log(sumOfPricesOnlyNumbers);
 console.log('**********************');
const sumOfPricesWithOnlyWithReduce = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(sumOfPricesWithOnlyWithReduce);
console.log('**********************');
function categorizeCountries(arr){
    return arr.reduce((acc, cur) => {
        if(cur.length === 5){
            acc.fiveLetters.push(cur);
        }else if(cur.length === 6){
            acc.sixLetters.push(cur);
        }else if(cur.length === 7){
            acc.sevenLetters.push(cur);
        }
        return acc;
    }, {fiveLetters: [], sixLetters: [], sevenLetters: []});
}
console.log(categorizeCountries(countries));
console.log('**********************');
function getFirstTenCountries(arr){
    return arr.slice(0, 2);
}
console.log(getFirstTenCountries(countries));
console.log('**********************');
function getLastTenCountries(arr){
    return arr.slice(-2);
}
console.log(getLastTenCountries(countries));
