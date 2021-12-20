function preload(){
  ms= loadSound("lol.mp3")
  mbg = loadImage ("haha.jpg")
  lc = loadSound ("mow.mp3")
  tg = loadSound ("tiger.mp3")
  sk = loadSound ("smokee.mp3")
}

function setup() {
  createCanvas(400, 400);
  ks = createButton("Stop")
  kp = createButton("Behti Hawa Sa Tha Woh")
  bh = createButton ("Tiger's Theme")
  ji = createButton ('Locked up ')
  ss = createButton ("Smoke Shisha")
  background(mbg);
  textSize(100)
  text("Song",10,height/2)
  kunal = createSlider(0,1,0.1,0.1)
  ks.mousePressed (stop)
  kp.mousePressed (wind)
  bh.mousePressed (starttiger)
  ji.mousePressed (startlocked)
  ss.mousePredded (startsmoke)
}

function draw() {
  //background(0,255,0);
  ms.setVolume(kunal.value())
  lc.setVolume(kunal.value())
  tg.setVolume(kunal.value())
  sk.setVolume(kunal.value())
}  
  function stop(){
    ms.stop()
    tg.stop()
    lc.stop()
    sk.stop
  }

function wind(){
  lc.stop()
  sk.stop
  tg.stop()
  ms.play()
}

function starttiger(){
  ms.stop()
  sk.stop
  lc.stop()
  tg.play()
}

function startlocked(){
  ms.stop()
  tg.stop()
  sk.stop
  lc.play()
}
function startsmoke(){
  ms.stop
  tg.stop
  lc.stop
  sk.play
}


 
  
  
