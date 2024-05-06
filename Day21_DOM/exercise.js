const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

const allTitles1 = document.getElementsByClassName('title')

console.log(allTitles1) //HTMLCollections
console.log(allTitles1.length) // 4

for (let i = 0; i < allTitles1.length; i++) {
  console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}

let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

firstTitle = document.querySelector('h1') // select the first available h1 element
firstTitle = document.querySelector('#first-title') // select id with first-title
firstTitle = document.querySelector('.title') // select the first available element with class title

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

titles[3].textContent = 'Fourth Title'