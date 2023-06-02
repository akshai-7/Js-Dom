//Dom
 
const view1 = document.getElementById('view1');
console.log(view1);

const view2 = document.querySelector('#view1');
console.log(view2);

const views = document.getElementsByClassName('view');
console.log(views);

const views1 = document.querySelectorAll('.view');
console.log(views1);

const div = view1.querySelectorAll('div');
console.log(div);


const divs = view1.getElementsByTagName('div');
console.log(divs);


const evendiv = view1.querySelectorAll('div:nth-of-type(2n)');
console.log(evendiv);