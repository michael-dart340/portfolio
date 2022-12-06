function setup() {
  createCanvas(120, 120);
}

let y=38;
let speed = 2;


function draw() {
  background(220);

fill (0,0,0)
rect (0,0,320,136);
  
fill (252,252,252)
ellipse (30,70,39,27)

fill (19,190,190)
ellipse (30,70,20,20);

fill (0,0,0)
ellipse (30,70,10,10);
  
fill (252,252,252)
ellipse (30,68,5,5);

fill (252,252,252)
ellipse (90,70,39,27);
  
fill (19,190,190)
ellipse (90,70,20,20);

fill (0,0,0)
ellipse (90,70,10,10);
  
fill (252,252,252)
ellipse (90,68,5,5);
  
  fill (0,0,0)
   
 
   
  ellipse (30,y,39,35);
  
  fill (0)
  ellipse (90,y,39,35);
  
    
 
    y = y + speed
    
    if(y > 70 || y < 40) 
    speed = -speed
  
  
 //if (y>=40){
 //    y=y+3;
 
 // }
 // else if (y<=70){
 //   y=y-3;
//  }
  
  
  



 













}