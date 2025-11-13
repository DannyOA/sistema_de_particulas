class Pelota {
  // Puedes pasar x,y; si no se pasan, usa la posición actual del mouse
  constructor(x = mouseX, y = mouseY) {
    this.posx = x;
    this.posy = y;

    this.diam = random(12, 88);
    this.rad = this.diam / 2;

    // velocidad horizontal leve, vertical hacia arriba
    this.velx = random(-1.5, 1.5);
    this.vely = random(-1.0, -4.0); // valores negativos => suben

    this.alpha = 255;
    this.alphaDecay = random(2, 5); // cuán rápido se desvanece

    // colores con rangos válidos
    this.nuevoColor = color(random(190, 250), random(10, 10), random(10, 5));
  }

  actualizar() {
    // rebote lateral opcional (si quieres que reboten en los bordes)
    if (this.posx > width - this.rad) {
      this.posx = width - this.rad;
      this.velx *= -1;
    } else if (this.posx < this.rad) {
      this.posx = this.rad;
      this.velx *= -1;
    }

    // si quieres que desaparezcan fuera del top sin rebotar, comenta las siguientes 2 líneas:
    if (this.posy < -this.rad) {
      // opcional: dejar que se vayan fuera del lienzo
    }

    this.posx += this.velx;
    this.posy += this.vely;

    this.alpha -= this.alphaDecay;
    this.alpha = max(this.alpha, 0);
  }

  visualizar() {
    // usar los componentes del color original pero con alpha variable
    fill(red(this.nuevoColor), green(this.nuevoColor), blue(this.nuevoColor), this.alpha);
    stroke(255, this.alpha * 0.5);
    strokeWeight(0);

    // dibuja una estrella de 5 puntas centrada en posx,posy
    this.dibujarEstrella(this.posx, this.posy, this.rad, this.rad / 2.2, 5);
  }

  // método separado para dibujar la estrella
  dibujarEstrella(x, y, radio1, radio2, puntos) {
    let ang = TWO_PI / puntos;
    let mitad = ang / 2.0;

    beginShape();
    for (let a = 0; a < TWO_PI; a += ang) {
      vertex(x + cos(a) * radio1, y + sin(a) * radio1);
      vertex(x + cos(a + mitad) * radio2, y + sin(a + mitad) * radio2);
    }
    endShape(CLOSE);
  }
}
