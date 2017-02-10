 var sup = 0;
 var speed  = 1;


function setup() {
  
createCanvas (windowWidth,windowHeight);
//var spc = random(1,4);
var spc = random(1,100);

}
function draw() {
  var spc = random(1,100);
  //var spc = random(1,100);
//var spc = random(1,100);
  if(spc > 25 ){
    speed = 1;
  }
  
  if(spc < 25 && spc > 75 ){
    speed = 0.01;
  }
  
  if(spc < 75 ){
    speed = 0.001;
  }

console.log(speed);
console.log(spc);
translate(width*0.5, height*0.5);

//ellipse(0,0,width);

frameRate(1800);
beginShape();
for( a = 0 ; a < PI*2; a = a + 0.02){

 sup = sup + speed;
 var r = width * cos(sup*a) ;
 var x = r*cos(a) ;
 var y = r*sin(a);
  vertex(x,y);
  
}
endShape();
}