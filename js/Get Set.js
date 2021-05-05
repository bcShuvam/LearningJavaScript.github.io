var elements;

//////////////////////DOM Get Methods/////////////////////////////////////////

elements  = document.body;
console.log(elements);

// It printsa all the text present inside the id header
elements  = document.getElementById('header').innerText;
console.log(elements);

// It prints all the inner HTML code inside id header
elements  = document.getElementById('header').innerHTML;
console.log(elements);

// IT returns Value of the given attribute
elements  = document.getElementById('header').getAttribute('id');
console.log(elements);

// IT returns Value of the given attribute
elements  = document.getElementById('header').getAttribute('style');
console.log(elements);

// It returns Value with Its Property
elements  = document.getElementById('header').getAttributeNode('style');
console.log(elements);

// .value will just return value
elements  = document.getElementById('header').getAttributeNode('style').value;
console.log(elements);

// .attribute will return all the attributes in the .html file
elements  = document.getElementById('header').attributes;
console.log(elements);

// .attribute[1] will return attrubute in that index 1
elements  = document.getElementById('header').attributes[1];
console.log(elements);

// .attribute[1].name will return only its name attrubute in that index 1
elements  = document.getElementById('header').attributes[1].name;
console.log(elements);

//////////////////////DOM Set Methods/////////////////////////////////////////

document.getElementById('header').innerHTML = '<h1>Clash Of Lunatics</h1>';
elements  = document.getElementById('header').innerHTML;
console.log(elements);

document.getElementById('header').setAttribute('class','xyz');
elements  = document.getElementById('header').getAttribute('class');
console.log(elements);

document.getElementById('header').setAttribute('style','border:10px solid yellow');
elements  = document.getElementById('header').getAttribute('class');
console.log(elements);

document.getElementById('header').attributes[1].value = 'xyz';
elements  = document.getElementById('header').getAttribute('class');
console.log(elements);

document.getElementById('header').removeAttribute('style');
elements  = document.getElementById('header').getAttribute('class');
console.log(elements);

document.getElementById('header').removeAttribute('class');
elements  = document.getElementById('header').getAttribute('class');
console.log(elements);
