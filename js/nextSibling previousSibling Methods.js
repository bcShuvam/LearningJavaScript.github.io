let a = document.getElementById('child-C').nextElementSibling;
console.log(a);

document.getElementById('child-C').nextElementSibling.style.background = 'red';

let b = document.getElementById('child-C').previousElementSibling;
console.log(b);

document.getElementById('child-C').previousElementSibling.style.background = 'orange';


let c = document.getElementById('child-E').nextElementSibling;
console.log(c);
console.log(c + 'because there is no element after element E')

let d = document.getElementById('child-C').nextSibling;
console.log(d);

let e = document.getElementById('child-head').nextSibling;
console.log(e);
