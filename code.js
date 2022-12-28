window.onload = function(){
  let mouse = document.getElementById("mouse");

  let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
      if(box.isIntersecting){
        box.target.style.opacity = 1;
      }else{
        box.target.style.opacity = 0;
      }
    })
  });

  let info = document.querySelectorAll('.info_text p');

  observer.observe(info[0]);
  
  window.addEventListener("scroll",function(){
    mouse.style.left = (window.scrollY/(document.documentElement.scrollHeight - (window.innerHeight*0.7))) * window.innerWidth +10+'px';
  });
  
  document.getElementById("intro").addEventListener('click',function(){movePage(0)});
  document.getElementById("nav").addEventListener('click',function(){movePage(1150)});
  document.getElementById("fund").addEventListener('click',function(){movePage(2100)});
  document.getElementById("credit").addEventListener('click',function(){movePage(3200)});
}

function movePage(location){
  window.scrollTo(0,location);
}