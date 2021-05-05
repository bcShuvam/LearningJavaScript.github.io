
let target = document.getElementById('test');

//// IT checks wearter the element hasAttribute class or not
//// And returns answer in either True or False
var find = target.hasAttribute('class');
console.log(find);

// It checks weather the element has any children or not eg:-p tag, h tag, div tag or any text
// And returns answer in true or False . Even a single space is also considered as a child
var find = target.hasChildNodes();
console.log(find);
