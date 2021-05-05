// .parentElement is used to select the parent of child outer
let a = document.getElementById('outer').parentElement;
console.log(a);

// .parentElement.style.background = '#000' will change the background the parent of child outer
document.getElementById('outer').parentElement.style.background = '#000';


let b = document.getElementById('inner').parentElement;
console.log(b);

document.getElementById('inner').parentElement.style.background = 'red';

let c = document.getElementById('child-C').parentElement;
console.log(c);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The difference batween parentElement And parentNode are
// parentElement returns null if its element dosent have any parent
// parentNode returns any value or some if its element dosent have any parent

let d = document.getElementById('main').parentNode;
console.log(d);

let e = document.getElementById('main').parentElement;
console.log(e);
