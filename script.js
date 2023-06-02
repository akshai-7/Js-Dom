//Dom
 
const view1 = document.getElementById('view1');
console.log(view1);

const view2 = document.querySelector('#view2');
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
// evendiv[2].style.backgroundColor = "red";

for (i = 0; i < evendiv.length; i++){
    evendiv[i].style.backgroundColor = "purple"; 
    // evendiv[i].style.width = "80px";
    evendiv[i].style.borderRadius = "7px";
}


const navText = document.querySelector('nav h1');
console.log(navText);
navText.textContent = "Akshaii";
const navBar = document.querySelector('nav');
console.log(navBar);
navBar.innerHTML = "<h2>Akshai</h2><p>Kumar</p>";

console.log(evendiv[0]);
console.log(evendiv[0].parentElement);
console.log(evendiv[0].parentElement.children);
console.log(evendiv[0].parentElement.childNodes);
console.log(evendiv[0].parentElement.hasChildNodes());
console.log(evendiv[0].parentElement.lastChild);
console.log(evendiv[0].parentElement.lastElementChild);
console.log(evendiv[0].parentElement.firstChild);
console.log(evendiv[0].parentElement.firstElementChild);
console.log(evendiv[0].nextSibling);
console.log(evendiv[0].nextElementSibling);
console.log(evendiv[0].nextElementSibling.nextElementSibling);
console.log(evendiv[0].previousSibling);
console.log(evendiv[0].previousElementSibling);

view1.style.display = "none";
// view2.style.display = "none";
console.log(view2.lastElementChild);
view2.lastElementChild.remove();


const createDiv = (parent, iter) => {
const newDiv = document.createElement("div");
newDiv.textContent =iter;
newDiv.style.fontSize = "20px";
newDiv.style.background = "green";
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.margin = "10px";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
parent.append(newDiv);
}
for (let i = 1; i <= 12; i++){
    createDiv(view2, i);
}
