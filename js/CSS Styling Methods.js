let elements;

elements = document.body;
console.log(elements);

// style.border will return the value of border
elements = document.querySelector('#header').style.border;

// style.border will return the value of border
document.querySelector('td').style.backgroundColor = 'skyblue';

// style.border will return the value of border
document.getElementById('header').removeAttribute('style');

// style.border will return the value of border
document.querySelector('#header').style.color = 'red';

// style.border will return the value of border
document.querySelector('#header').className = 'clasName';

// style.border will return the value of border
document.querySelector('.clasName').style.color = 'yellow';

// style.border will return the value of border
document.querySelector('#header').classList.add('Added','Added2','Added3');
document.querySelector('#header').classList.remove('Added2','Added3');
elements = document.querySelector('#header').classList;
console.log(elements)
