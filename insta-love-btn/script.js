let icon = document.querySelector('i');
let image = document.querySelector('img');

image.addEventListener('dblclick',function(){
    console.log('clicked');
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    icon.style.opacity = '0.8';
    setTimeout(function(){
        icon.style.opacity = '0';
    },1000)
    setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000)
})