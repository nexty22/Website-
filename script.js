// Loader
let progress=0;
const loader=document.getElementById('loader');
const progressText=document.getElementById('progress');
let interval=setInterval(()=>{
  progress+=Math.random()*8+2;
  if(progress>=100){ progress=100; clearInterval(interval); progressText.innerText='100%';
    loader.style.transition='opacity 0.8s, transform 0.8s';
    loader.style.opacity='0'; loader.style.transform='scale(1.05)';
    setTimeout(()=>loader.style.display='none',800);
  } else { progressText.innerText=Math.floor(progress)+'%'; }
},150);

// Dark/Light mode
function toggleMode(){document.body.classList.toggle('light-mode');}

// Modal
const modal=document.getElementById('contactModal');
function showModal(){modal.classList.add('show');}
function closeModal(){modal.classList.remove('show');}

// Particles
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth; canvas.height=
