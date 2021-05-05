// let newElement = document.createElement('li');
//
// newText = document.createTextNode('replaceChild');
//
// newElement.appendChild(newText);

// let target = document.getElementById('list');
// let oldElement = target.children[1];
//
// // console.log(oldElement);
// first parameter replacewith & second parameter tobe replaced
// target.replaceChild(newElement,oldElement)
//
let target = document.getElementById('list');
let oldElement = target.children[1];

// console.log(oldElement);

target.removeChild(oldElement);
