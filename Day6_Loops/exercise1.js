

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase();
    console.log(countries[i]);
  }
  const countriesLength = [];
    for (let i = 0; i < countries.length; i++) {
        countriesLength.push(countries[i].length);
        console.log(countries[i].length);
    }
const bigArray = [];
for (let i = 0; i < countries.length; i++) {
    let temp = [countries[i],countries[i].slice(0,3),countriesLength[i]];
    bigArray.push(temp);
    console.log(bigArray[i]);
}

for (let i = 0; i < bigArray.length; i++) {
    if(bigArray[i][0].includes('land')){
        console.log(bigArray[i]);
    }
}




