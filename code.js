window.onload = function(){
  let mouse = document.getElementById("mouse");
  
  window.addEventListener("scroll",function(){
    mouse.style.left = ((window.scrollY+window.innerHeight/2-35)/document.documentElement.scrollHeight*window.innerWidth) +'px';
  });
  
  document.getElementById("intro").addEventListener('click',function(){movePage(0)});
  document.getElementById("nav").addEventListener('click',function(){movePage(1000)});
  document.getElementById("fund").addEventListener('click',function(){movePage(2000)});
  document.getElementById("credit").addEventListener('click',function(){movePage(3000)});
}

function movePage(location){
  window.scrollTo(0,location);
}