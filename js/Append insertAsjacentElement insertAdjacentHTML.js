// let newElement = document.createElement('h2');
//
// let newText = document.createTextNode('This is insertAdjacentElement Method');
//
// newElement.appendChild(newText)
//
// let target = document.getElementById('test');
//
// target.insertAdjacentElement('beforeend',newElement);

///////////////////////////////////////////////////////////////////////////////////

// let target = document.getElementById('test');
//
// let newElement = '<h2> This is insertAdjacentHTML Method <h2>';
//
// target.insertAdjacentHTML('afterbegin',newElement);

///////////////////////////////////////////////////////////////////////////////////

let target = document.getElementById('test');

let newText= 'This is insertAdjacentText Method';

target.insertAdjacentText('afterend',newText);
