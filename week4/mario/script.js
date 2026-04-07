const mario=document.querySelector('#player');
const parent = mario.parentElement;
let x=0, y=0;

document.addEventListener('keydown', (e) =>  {
    let top = mario.offsetTop;
    let left = mario.offsetLeft;
    
    switch (e.key) {
    case "ArrowUp":
        if (top > 0) {    
            mario.style.top = (top - 10)+"px";
            mario.src='https://static.lacapsule.academy/practice/mario/mario-back-1.png';
        }
        break;
        
    case "ArrowDown":
        if (top < parent.offsetHeight - mario.offsetHeight) {
            mario.style.top = (top + 10)+"px";
            mario.src='https://static.lacapsule.academy/practice/mario/mario-front-1.png';
        } 
        break;    
            
    case "ArrowLeft":
        if (left > 0) {
            mario.style.left = (left - 10)+"px"; 
            mario.src='https://static.lacapsule.academy/practice/mario/mario-left-1.png';
        }
        break;
        
    case "ArrowRight":
        if (left < parent.offsetWidth - mario.offsetWidth) {
            mario.style.left = (left + 10) + "px";
            mario.src='https://static.lacapsule.academy/practice/mario/mario-right-1.png';
        } 
        break;  
   }
 });
 