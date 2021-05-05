let elements;

document.getElementById('header').onclick = headerClick;
document.getElementById('header').onmouseenter = headerhover;

function headerClick(){
  document.querySelector('tr').style.backgroundColor = 'yellowgreen';
  document.getElementById('header').style.color = 'reds';
}

function headerhover(){
  document.querySelector('tr').style.backgroundColor = 'hotpink';
  document.getElementById('header').style.color = '#fff';
}

document.getElementById('header').addEventListener('dblclick',function(){
  document.querySelector('table').style.border = '5px dashed red';
})

elements = document.querySelector('#header').classList;
console.log(elements);
