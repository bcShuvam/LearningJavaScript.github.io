
let timeOut = setTimeout(function(){
  let target = document.getElementById('test');
  target.style.width = '500px';
},3000);


function stop(){
  clearTimeout(timeOut);
}
