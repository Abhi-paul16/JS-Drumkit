document.addEventListener('keydown' ,function (e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   audio.currentTime = 0
   if(!audio) return;
   audio.play()
    key.classList.add('playing');
    
} )


const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend',removetransition);
});


function removetransition(e){
if(e.propertyName == "transform"){
 this.classList.remove('playing')
}
}

