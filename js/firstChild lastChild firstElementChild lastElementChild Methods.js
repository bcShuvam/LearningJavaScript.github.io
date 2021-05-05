let a = document.getElementById('inner').firstElementChild;
console.log(a);

let b = document.getElementById('inner').firstElementChild.innerHTML;
console.log(b);

document.getElementById('inner').firstElementChild.style.background = 'slateblue';

let c = document.getElementById('outer').firstElementChild;
console.log(c);

let d = document.getElementById('outer').firstElementChild.innerHTML;
console.log(d);

document.getElementById('outer').firstElementChild.style.background = 'crimson';

// lastElementChild is used too select the last element of the last child of the parent

let e = document.getElementById('inner').lastElementChild;
console.log(e);

let f = document.getElementById('inner').lastElementChild.innerHTML;
console.log(f);

document.getElementById('inner').lastElementChild.style.background = 'yellow';

let g = document.getElementById('outer').lastElementChild;
console.log(g);

let h = document.getElementById('outer').lastElementChild.innerHTML;
console.log(h);

document.getElementById('outer').lastElementChild.style.background = 'orange';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// firstChild And lastChild

let i = document.getElementById('inner').firstChild;
console.log(i);

let j = document.getElementById('child-C').firstChild;
console.log(j);
