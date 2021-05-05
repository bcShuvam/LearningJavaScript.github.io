let a = document.getElementById('outer').children;
console.log(a);

let b = document.getElementById('inner').children;
console.log(b);

let c = document.getElementById('inner').children[4].style.background='yellow';
console.log(c);

// The childNodes will select the child inside the parent but also it prints comment as a index but nothing can be applied to it

let d = document.getElementById('inner').childNodes;
console.log(d);

document.getElementById('inner').childNodes[1].innerText = 'Fuck You Man !';

document.getElementById('inner').childNodes[1].style.color = 'slateblue';
