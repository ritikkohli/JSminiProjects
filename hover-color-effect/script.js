let rect = document.querySelector('.rectangle');

rect.addEventListener('mousemove',function(details){
    let rectLacation = rect.getBoundingClientRect();
    let mouseLocation = details.clientX - rectLacation.left;
    if(mouseLocation < rectLacation.width/2){
        var redcolor = gsap.utils.mapRange(0, rectLacation.width/2, 255, 0, mouseLocation);
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor}, 0, 0)`,
            ease : Power4
        })
    }else{
        var bluecolor = gsap.utils.mapRange(rectLacation.width/2, rectLacation.width, 0, 255, mouseLocation);
        gsap.to(rect, {
            backgroundColor : `rgb(0, 0, ${bluecolor})`,
            ease : Power4
        })
    }
})

rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor : "white"
    })
})