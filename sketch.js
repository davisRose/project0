function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  
  background('#222222');
  
  let s = (windowHeight / 18);
  let sa = s * 3;
  let sb = s * 4;
  let sc = s * 5;
  let sd = s * 8;

  let ba = s * 3.5;
  let bb = s * 7;

  let size = 100;
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  translate(centerX, centerY);


// Streamlined variables, added 4th vertex to each shape instead of using strokeWeight
// So that I can have tapered ends

 noStroke();
 fill(50, 50, 250);

//1
  beginShape();
    vertex(-s, -sb);
    vertex(-sb, -sb);
    vertex(-sb, sa);
    vertex(-ba, -ba);
  endShape(CLOSE);

//2
  beginShape();
    vertex(-sc, s);
    vertex(-sd, sb);
    vertex(-s, sb);
    vertex(-bb, ba);
  endShape(CLOSE);

//3
  beginShape();
    vertex(-sb, sc);
    vertex(-sb, sd);
    vertex(sa, s);
    vertex(-ba, bb);
  endShape(CLOSE);

//4
  beginShape();
    vertex(s, sb);
    vertex(sb, sb);
    vertex(sb, -sa);
    vertex(ba, ba);
  endShape(CLOSE);

//5
  beginShape();
    vertex(sc, -s);
    vertex(sd, -sb);
    vertex(s, -sb);
    vertex(bb, -ba);
  endShape(CLOSE);

//6
  beginShape();
    vertex(sb, -sc);
    vertex(sb, -sd);
    vertex(-sa, -s);
    vertex(ba, -bb);
  endShape(CLOSE);

//--------------------------------------------

// 6 3-vertex shapes

  // strokeWeight(10);
  // strokeCap(SQUARE);
  // stroke(50, 50, 250);
  // noFill();

  // beginShape();

  // //1
  //   vertex(-s, -4 * s);
  //   vertex(-4 * s, -4 * s);
  //   vertex(-4 * s, 3 * s);

  // endShape();

  // beginShape();

  // //2
  //   vertex(-5 * s, s);
  //   vertex(-8 * s, 4 * s);
  //   vertex(-s, 4 * s);

  // endShape();

  // beginShape();

  // //3
  //   vertex(-4 * s, 5 * s);
  //   vertex(-4 * s, 8 * s);
  //   vertex(3 * s, s);

  // endShape();

  // beginShape();

  // //4
  //   vertex(s, 4 * s);
  //   vertex(4 * s, 4 * s);
  //   vertex(4 * s, -3 * s);

  // endShape();

  // beginShape();

  // //5
  //   vertex(5 * s, -s);
  //   vertex(8 * s, -4 * s);
  //   vertex(s, -4 * s);

  // endShape();

  // beginShape();

  // //6
  //   vertex(4 * s, -5 * s);
  //   vertex(4 * s, -8 * s);
  //   vertex(-3 * s, -s);

  // endShape();

//--------------------------------------------

// Shape made from separate 2 pt lines (corners r weird)

  // beginShape(LINES);

  // //1ab
  //   vertex(-s, -4 * s);
  //   vertex(-4 * s, -4 * s);
  // //1bc
  //   vertex(-4 * s, -4 * s);
  //   vertex(-4 * s, 3 * s);

  // //2ab
  //   vertex(-5 * s, s);
  //   vertex(-8 * s, 4 * s);
  // //2bc
  //   vertex(-8 * s, 4 * s);
  //   vertex(-s, 4 * s);

  // //3ab
  //   vertex(-4 * s, 5 * s);
  //   vertex(-4 * s, 8 * s);
  // //3bc
  //   vertex(-4 * s, 8 * s);
  //   vertex(3 * s, s);

  // //4ab
  //   vertex(s, 4 * s);
  //   vertex(4 * s, 4 * s);
  // //4bc
  //   vertex(4 * s, 4 * s);
  //   vertex(4 * s, -3 * s);

  // //5ab
  //   vertex(5 * s, -s);
  //   vertex(8 * s, -4 * s);
  // //5bc
  //   vertex(8 * s, -4 * s);
  //   vertex(s, -4 * s);

  // //6ab
  //   vertex(4 * s, -5 * s);
  //   vertex(4 * s, -8 * s);
  // //6bc
  //   vertex(4 * s, -8 * s);
  //   vertex(-3 * s, -s);
    
  // endShape();

//--------------------------------------------

// Just overlapping triangles:

  //  noStroke();
  //fill(50, 50, 250);

  // beginShape(TRIANGLES);

  // vertex(-size, -size);
  // vertex(2 * size, -size);
  // vertex(-size, 2 * size);
  
  // vertex(size, -2 * size);
  // vertex(size, size);
  // vertex(-2 * size, size);
  
  // endShape();

}