
//  for(country of countries){
//    let name,capital,languages,population,flag,currency = country;
//   console.table({name,capital,languages,population,flag,currency});
// } 

console.assert(10>2*10)
console.warn('This is a warning')
console.error('This is an error')



function speedDifference(){

    console.time('for loop')
    for(let i = 0; i < countries.length; i++){
        console.log(countries[i])
    }
    console.timeEnd('for loop')

    console.time('for of')
    for(country of countries){
        console.log(country)
    }
    console.timeEnd('for of')

    console.time('forEach')
    countries.forEach(country => console.log(country))
    console.timeEnd('forEach')
}

speedDifference()