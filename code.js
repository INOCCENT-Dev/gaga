window.onload = function(){
  let mouse = document.getElementById("mouse");
  
  window.addEventListener("scroll",function(){
    mouse.style.left = (window.scrollY/(document.documentElement.scrollHeight - (window.innerHeight*0.7))) * window.innerWidth +10+'px';
  });
  
  document.getElementById("intro").addEventListener('click',function(){movePage(0)});
  document.getElementById("nav").addEventListener('click',function(){movePage(1150)});
  document.getElementById("fund").addEventListener('click',function(){movePage(2000)});
  document.getElementById("credit").addEventListener('click',function(){movePage(3000)});
}

function movePage(location){
  window.scrollTo(0,location);
}