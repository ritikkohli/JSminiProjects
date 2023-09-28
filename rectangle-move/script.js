window.addEventListener('mousemove',function(det){
    let rectangleWidth = document.querySelector('#rectangle').getBoundingClientRect().width/2;
    let xVal = gsap.utils.mapRange(
        0,
        window.innerWidth,
        200+rectangleWidth,
        window.innerWidth-200-rectangleWidth,
        det.clientX
    );
    gsap.to('#rectangle',{
        left : xVal + "px",
        ease : Power3
    })
})