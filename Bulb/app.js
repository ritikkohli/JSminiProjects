let a = document.querySelector(".bulb");
let btnOn = document.querySelector("#on-btn");
let btnOff = document.querySelector("#off-btn");

btnOn.addEventListener('click',function(){
    a.style.backgroundColor = 'yellow';
    this.style.color = 'gray';
    btnOff.style.color = 'black';
    a.innerHTML = `<audio src="switch-audio.mpeg" autoplay></audio>`;
})
btnOff.addEventListener('click',function(){
    a.style.backgroundColor = 'white';
    this.style.color = 'gray';
    btnOn.style.color = 'black';
    a.innerHTML = `<audio src="switch-audio.mpeg" autoplay></audio>`;
})