
let count = 0;

let clear = setInterval(Anim,100);

 // let clear2 = setInterval(Move,1000);

function Anim() {
  count += 10;
  let target1 = document.getElementById('test');
  if(count <= 200){
    target1.style.marginLeft = count + 'px';
  }
  else if (count > 200 && count <= 400) {
    target1.style.marginTop = count + 'px';
  }
  else if (count > 400 && count <= 800) {
    target1.style.marginLeft = count + 'px';
  }
  else {
    target1.style.marginBottom = count + 'px';
  }
}
// function Move(){
//   count += 10;
//   target2 = document.getElementsByClassName('Move');
//   target2.style.marginLeft = count + 'px';
// }

function stop(){
  target2 = document.getElementById('stop');
  clearInterval(clear);
  // clearInterval(clear2);
}
