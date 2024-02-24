let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
shoppingCart.splice(shoppingCart.indexOf('Tea'),1,1,'Green Tea');
console.log(shoppingCart);

