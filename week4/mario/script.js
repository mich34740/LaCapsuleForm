const mario=document.querySelector('#player');
let x=0, y=0;
document.addEventListener('keydown', (e) =>  {
   switch (e.code) {
    case "ArrowUp":
        y-=10;
        mario.src='https://static.lacapsule.academy/practice/mario/mario-front-1.png'
        break;
    case "ArrowDown":
        y+=10;
        mario.src='https://static.lacapsule.academy/practice/mario/mario-back-1.png'
        break;    
    case "ArrowLeft":
        x-=10;
        mario.src='https://static.lacapsule.academy/practice/mario/mario-left-1.png'
        break;
    case "ArrowRight":
        x+=10;
        mario.src='https://static.lacapsule.academy/practice/mario/mario-right-1.png'
        break;    
   }
   mario.style.transform = `translate(${x}px, ${y}px)`;
   console.log(mario.offsetTop);
 });
 