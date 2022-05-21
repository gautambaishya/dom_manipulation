
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
var title = document.querySelectorAll('.title');
console.log(title);
// title[1].textContent = 'Hello';



var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green'
}

var Item = document.querySelectorAll('.list-group-item');
console.log(Item);
Item[1].style.color = 'green';

