var elements;

// document.querySelector('tr').addEventListener('click',onlick);

// function onlick(){
  // document.querySelector('tr').classList.add('xyz','efg');
  // document.querySelector('tr').classList.remove('efg');
  // var a = document.querySelector('tr').classList.length;
  // console.log(a);
// }

document.querySelector('tr').addEventListener('dblclick',dbllick);

function dbllick(){
  document.querySelector('tr').classList.toggle('xyz');
  let a = document.getElementById('header').classList.item(0);
  console.log(a);
  let b = document.getElementById('header').classList.contains('first');
  console.log(b);
}
