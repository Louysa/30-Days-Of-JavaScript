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

/* const countriesPrintAll = countries.forEach((country) => console.log(country));
const namesPrintAll = names.forEach((name) => console.log(name));
const numbersPrintAll = numbers.forEach((number) => console.log(number)); */

const upperCaseCountries = countries.map((country)=> country.toUpperCase());
const countriesLength = countries.map((country)=> country.length);

const squareNumber = numbers.map((number) => number * number);

const upperCaseNames = names.map((name) => name.toUpperCase());

const productsPrice = products.map((product) => product.price);

const countriesFilter = countries.filter((country) => country.toLowerCase().includes("land"));

const countriesLengthFilter = countries.filter((country) => country.length === 6);

const countriesStartWithE = countries.filter((country) => country.startsWith("E"));

const productsPriceFilter = products.filter((product) => product.price);

function getStringLists(arr){
    return arr.filter((item) => typeof item === 'string');
}

const reduceNumbers = numbers.reduce((acc, cur) => acc + cur, 0);

const reduceCountryWithSpaces = countries.reduce((acc, cur) => acc + cur + ' ', '');

const someNames = names.some((name) => name.length > 7);
const everyCountry = countries.every((country) => country.includes("land"));

const findCountry = countries.find((country) => country.length === 6);

const findCountryIndex = countries.findIndex((country) => country.length === 6);

const findCountryNorway = countries.findIndex((country) => country === "Norway");

const findCountryRussia = countries.findIndex((country) => country === "Russia");


console.log(upperCaseCountries);
console.log('**********************');
console.log(countriesLength);
console.log('**********************');
console.log(squareNumber);
console.log('**********************');
console.log(upperCaseNames);
console.log('**********************');
console.log(productsPrice);
console.log('**********************');
console.log(countriesFilter);
console.log('**********************');
console.log(countriesLengthFilter);
console.log('**********************');
console.log(countriesStartWithE);
console.log('**********************');
console.log(productsPriceFilter);
console.log('**********************');
console.log(getStringLists([1, 2, 3, 4, 5, 'Asabeneh', 'Elias', 'Mathias']));
console.log('**********************');
console.log(reduceNumbers);
console.log('**********************');
console.log(reduceCountryWithSpaces);
console.log('**********************');
console.log(someNames);
console.log('**********************');
console.log(everyCountry);
console.log('**********************');
console.log(findCountry);
console.log('**********************');
console.log(findCountryIndex);
console.log('**********************');
console.log(findCountryNorway);
console.log('**********************');
console.log(findCountryRussia);
console.log('**********************');
