
// console.dir(document);
// console.log('Hello');

// Examine the document object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'New Title';
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// // GetElementById
// var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello'
// // headerTitle.innerText = 'GoodBye';
// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3> Hello </h3>';
// headerTitle.style.borderBlock = 'solid 3px #000';
// // header.style.borderBottom = 'solid 3px #000'

// var addItem = document.getElementById('main')
// console.log(addItem);
// addItem.firstElementChild.style.fontWeight = "bold";
// addItem.firstElementChild.style.color = 'green';



// GetElementsByClassName 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';
// items[2].style.background = 'green';

// for(var i = 0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

// GetElementByTageName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// li[2].style.background = 'red';

// for(var i = 0; i<li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// QuerySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';   //Make the 2nd item have green background color

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.visibility = 'hidden';  // Make the 3rd item invisible


// // querySelectorall
// var title = document.querySelectorAll('.title');
// console.log(title);
// // title[1].textContent = 'Hello';



// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green'
// }

// var Item = document.querySelectorAll('.list-group-item');
// console.log(Item);
// Item[1].style.color = 'green';

// Traversing the Dom
var itemList = document.querySelector('#items');
// ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "grey";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'blue';
// console.log(itemList.parentElement.parentElement.parentElement);

// Childnode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor ='red';

// FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = 'blue';
// itemList.firstElementChild.textContent = 'Hello 1';

// // LastChild
// console.log(itemList.lastChild);
// // LastChildElement
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = 'green';
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSiblings
// console.log(itemList.nextSibling);
// // nextElementShibling
// console.log(itemList.nextElementSibling);

// // previousShibling
// console.log(itemList.previousSibling);
// // previousElementShibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'pink';

// createElement

// create a div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add atttribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('HEllo');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize ='30px';



// create a div
var newDiv1 = document.createElement('div');

// add class
newDiv1.className = 'hello1';

// add id
newDiv1.id = 'hello2';

// add atttribute
newDiv1.setAttribute('title', 'Hello Div');

// create text node
var newDivText1 = document.createTextNode('HEllo');

// add text to div
newDiv1.appendChild(newDivText1);

var container = document.querySelector('div .list-group');
var ul = document.querySelector('ul li');
container.insertBefore(newDiv1, ul);
newDiv1.style.fontSize ='30px';


