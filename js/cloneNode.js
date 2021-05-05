let target = document.getElementById('list1').children[0];

let cloneitems = target.cloneNode(true);

console.log(cloneitems);

document.getElementById('list2').appendChild(cloneitems)
