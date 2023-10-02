const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let playButton = document.querySelector('#play-btn')
document.querySelector('#video-container').addEventListener('mouseenter',function(details){
    gsap.to(playButton,{
        scale:1,
        opacity:1,
    })
})
document.querySelector('#video-container').addEventListener('mouseleave',function(details){
    gsap.to(playButton,{
        scale:0,
        opacity:0,
    })
})
document.querySelector('#video-container').addEventListener('mousemove',function(details){
    gsap.to(playButton,{
        left:details.x-70,
        top:details.y-80
    })
})
let hover_cursor = document.querySelector('.hover-div');
document.querySelector('.product-card').addEventListener('mouseenter',function(details){
    gsap.to(hover_cursor,{
        scale:1,
        opacity:1,
    })
})
document.querySelector('.product-card').addEventListener('mouseleave',function(details){
    gsap.to(hover_cursor,{
        scale:0,
        opacity:0,
    })
})
document.querySelector('.product-card').addEventListener('mousemove',function(details){
    hover_cursor.style.left = details.clientX-10+'px';
    hover_cursor.style.top = details.clientY-205+'px';

})