function setup() {
  createCanvas(1000, windowWidth);
  // create sliders
rSlider = createSlider(255, 255, 255);
rSlider.position(300, 20);
gSlider = createSlider(255, 255, 255);
gSlider.position(300, 50);
bSlider = createSlider(255, 255, 255);
bSlider.position(300, 80);
  }
  
  function draw() {
    background(500);

    const r = rSlider.value();
    const g = gSlider.value();
    const b = bSlider.value();
    background(r, g, b);
    text(rSlider.x * 2 + rSlider.width, 35);
    text(gSlider.x * 2 + gSlider.width, 65);
    text(bSlider.x * 2 + bSlider.width, 95);

    //red stripes
    rect(0, 900,windowWidth, 50);
    fill(255,0,0)
    rect(0, 700,windowWidth, 50);
    fill(255,0,0)
    rect(0, 600,windowWidth, 50);
    fill(255,0,0)
    rect(0, 500,windowWidth, 50);
    fill(255,0,0)
    rect(0, 400,windowWidth, 50);
    fill(255,0,0)
    rect(0, 300,windowWidth, 50);
    fill(255,0,0)
    
    fill(255,0,0)
    rect(250, 0,windowWidth*.68, 50);
    fill(255,0,0)
    rect(250, 200,windowWidth*.68, 50);
    fill(255,0,0)
    rect(250, 100,windowWidth*.68, 50 );
    fill(255,0,0)
    
    //blue box
    fill(9,0,255)
    rect(0,0,533,300)
  
    //gray star
    fill(128,128,128)
    //Row 1
    rect(0,0,41,33)
    rect(82,0,41,33)
    rect(164,0,41,33)
    rect(246,0,41,33)
    rect(328,0,41,33)
    rect(410,0,41,33)
    rect(492,0,41,33)
    //Row 2
    rect(41,33,41,33)
    rect(123,33,41,33)
    rect(205,33,41,33)
    rect(287,33,41,33)
    rect(369,33,41,33)
    rect(451,33,41,33)
    //Row 3
    rect(0,66,41,33)
    rect(82, 66,41,33)
    rect(164,66,41,33)
    rect(246,66,41,33)
    rect(328,66,41,33)
    rect(410,66,41,33)
    rect(492,66,41,33)
    //Row 4
    rect(41,99,41,33)
    rect(123,99,41,33)
    rect(205,99,41,33)
    rect(287,99,41,33)
    rect(369,99,41,33)
    rect(451,99,41,33)
    //Row 5
    rect(0,132,41,33)
    rect(82, 132,41,33)
    rect(164,132,41,33)
    rect(246,132,41,33)
    rect(328,132,41,33)
    rect(410,132,41,33)
    rect(492,132,41,33)
    //Row 6
    rect(41,165,41,33)
    rect(123,165,41,33)
    rect(205,165,41,33)
    rect(287,165,41,33)
    rect(369,165,41,33)
    rect(451,165,41,33)
    //Row 7
    rect(0,198,41,33)
    rect(82, 198,41,33)
    rect(164,198,41,33)
    rect(246,198,41,33)
    rect(328,198,41,33)
    rect(410,198,41,33)
    rect(492,198,41,33)
    //Row 8
    rect(41,231,41,33)
    rect(123,231,41,33)
    rect(205,231,41,33)
    rect(287,231,41,33)
    rect(369,231,41,33)
    rect(451,231,41,33)
    //Row 9
    rect(0,264,41,33)
    rect(82,264,41,33)
    rect(164,264,41,33)
    rect(246,264,41,33)
    rect(328,264,41,33)
    rect(410,264,41,33)
    rect(492,264,41,33)
    
    //Text
      textSize(50);
      textFont('Georgia');
    fill(10,10,10);
    textWrap(WORD);
    text('"I pledge allegiance to the Flag of the United States of America, and to the Republic for which it stands, one Nation under God, indivisible, with liberty and justice for all."',100, 300,700);
 

  }
  
  