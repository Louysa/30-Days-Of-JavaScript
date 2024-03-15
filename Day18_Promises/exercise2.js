
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI)
    .then((response) => response.json())
    .then((cats) => {
        cats.forEach(cat => {
            console.log(cat.name)
        });
    })
    .catch((error) => console.log('Error: ',error));