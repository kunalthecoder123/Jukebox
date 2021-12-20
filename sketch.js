function preload(){
  ms= loadSound("lol.mp3")
  mbg = loadImage ("haha.jpg")
  lc = loadSound ("mow.mp3")
  tg = loadSound ("tiger.mp3")
}

function setup() {
  createCanvas(400, 400);
  ks = createButton("Stop")
  kp = createButton("Behti Hawa Sa Tha Woh")
  bh = createButton ("Tiger's Theme")
  ji = createButton ('Locked up ')
  background(mbg);
  textSize(100)
  text("Song",10,height/2)
  kunal = createSlider(0,1,0.1,0.1)
  ks.mousePressed (stop)
  kp.mousePressed (wind)
  bh.mousePressed (starttiger)
  ji.mousePressed (startlocked)
}

function draw() {
  //background(0,255,0);
  ms.setVolume(kunal.value())
  lc.setVolume(kunal.value())
  tg.setVolume(kunal.value())
}  
  function stop(){
    ms.stop()
    tg.stop()
    lc.stop()
  }

function wind(){
  lc.stop()
  tg.stop()
  ms.play()
}

function starttiger(){
  ms.stop()
  lc.stop()
  tg.play()
}

function startlocked(){
  ms.stop()
  tg.stop()
  lc.play()
}


 
  
  
