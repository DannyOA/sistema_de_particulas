let pelotas = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    rectMode(CENTER);    
}

function draw() {
    background("#000354ff");

if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    pelotas.push (new Pelota(mouseX, mouseY));
}

for(let i = pelotas.length - 1; i>=0; i--){
   pelotas[i].actualizar();
   pelotas[i].visualizar();


if (pelotas[i].alpha <= 0){
    pelotas.splice(i,1);
}
}
}
