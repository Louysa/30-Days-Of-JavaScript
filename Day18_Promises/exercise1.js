const countriesAPI = 'https://restcountries.com/v2/all'


fetch(countriesAPI)
    .then((response) => response.json())
    .then((countries) => {
        countries.forEach(country => {
            console.log(country.name)
            console.log(country.capital)
            console.log(country.languages)
            console.log(country.population)
            console.log(country.area)
        });
    })
    .catch((error) => console.log('Error: ', error))