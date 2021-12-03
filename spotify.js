//song value
let songIndex = 0;
let audioelement = new Audio('song/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogress = document.getElementById("myprogress");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"))

//Song list container
let song = [
    {songname: "Let me love You",filepath:"song/1.mp3",coverpath:"cover/cover1.jpeg"},
    {songname: "Rise up",filepath:"song/2.mp3",coverpath:"cover/2.jpeg"},
    {songname: "unknown",filepath:"song/3.mp3",coverpath:"cover/3.jpeg"},
    {songname: "I am Rider",filepath:"song/4.mp3",coverpath:"cover/4.jpeg"},
    {songname: "Taki Taki",filepath:"song/5.mp3",coverpath:"cover/5.jpeg"},
    {songname: "Netflix Soldier",filepath:"song/6.mp3",coverpath:"cover/2.jpeg"},
    {songname: "Netflix Cold",filepath:"song/7.mp3",coverpath:"cover/4.jpeg"},
]
//songName
songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = song[i].coverpath
element.getElementsByClassName("songname")[0].innerText = song[i].songname
})

//Masterplay
masterplay.addEventListener("click", ()=>{
if(audioelement.paused || audioelement.currentTime<=0){
audioelement.play();
masterplay.classList.remove("fa-play-circle")
masterplay.classList.add("fa-pause-circle")
gif.style.opacity =1;
}else{
audioelement.pause();
masterplay.classList.remove("fa-pause-circle")
masterplay.classList.add("fa-play-circle")
gif.style.opacity =0;
}
})

//audioelement
audioelement.addEventListener("timeupdate",()=>{
progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
myprogress.value = progress;
})

//myprogress
myprogress.addEventListener("change", ()=>{
audioelement.currentTime = myprogress.value * audioelement.duration/100;
})

const makeAllPlays = ()=>{
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.classList.remove("fa-pause-circle");
element.classList.add("fa-play-circle");
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click", (e)=>{
  makeAllPlays();
  songIndex = parseInt(e.target.id);
  e.target.classList.remove("fa-play-circle");
  e.target.classList.add("fa-pause-circle");
  audioelement.src = `song/${songIndex + 1}.mp3`;
  audioelement.currentTime = 0;
  audioelement.play();
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
  })
})

document.getElementById("next").addEventListener("click", ()=>{
if(songIndex>=6){
songIndex = 0
}else{
songIndex += 1;
}

audioelement.src = `song/${songIndex + 1}.mp3`;
audioelement.currentTime = 0;
audioelement.play();
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener("click", ()=>{
if(songIndex<=6){
songIndex = 0
}else{
songIndex -= 1;
}
audioelement.src = `song/${songIndex + 1}.mp3`;
audioelement.currentTime = 0;
audioelement.play();
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
})