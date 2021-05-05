 var elements;
document.getElementById('header').removeAttribute('style');

document.querySelector('#header').innerHTML = '<h1>Clash of Lunatics</h1>';

// It will return first tr tag
elements = document.querySelector('tr');
console.log(elements)

// It will return all tr tag in array format
elements = document.querySelectorAll('tr');
console.log(elements)

// It will return the innerHTML in the 1 index at tr tag
elements = document.querySelectorAll('tr')[1].innerHTML;
console.log(elements);

// It will return the innerHTML in the 1 index at tr tag
elements = document.querySelectorAll('#header h1');
console.log(elements);
