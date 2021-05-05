let newElement = document.createElement('h2');
console.log(newElement);

let newTextNode = document.createTextNode('createTextNode');
console.log(newTextNode);

let newComment = document.createComment('Appending NewComment');

newElement.appendChild(newTextNode);

let target = document.getElementById('test');

// document.getElementById('test').appendChild(newElement);
document.getElementById('test').appendChild(newComment);
target.insertBefore(newElement,target.childNodes[0])
