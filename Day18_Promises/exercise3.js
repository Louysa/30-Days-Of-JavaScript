const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// metric = "3 - 5"

const catsAverageWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        let averageWeight = 0
        let count = 0
        cats.forEach(cat => {
            if (cat.weight.metric) {
                const weight = cat.weight.metric.split(' - ')
                averageWeight += (parseInt(weight[0]) + parseInt(weight[1])) / 2
                count++
            }
        });
        averageWeight = averageWeight / count

        console.log(averageWeight)
    } catch (error) {
        console.log('Error: ', error)
    }
}
catsAverageWeight();

const largest10Country = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        countries.sort((a, b) => b.area - a.area)
        for (let i = 0; i < 10; i++) {
            console.log(countries[i].name)
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}

largest10Country();

const languages = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        let languages = []
        countries.forEach(country => {
            country.languages.forEach(language => {
                if (!languages.includes(language.name)) {
                    languages.push(language.name)
                }
            });
        });
        console.log(languages)
    } catch (error) {
        console.log('Error: ', error)
    }
}
languages();

