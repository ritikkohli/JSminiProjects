let cursor = document.querySelector('#cursor');
let body = document.querySelector('#main');


body.addEventListener('mousemove',function(detl){
    // console.log(detl.clientX,detl.clientY)
    cursor.style.left = detl.x+'px';
    cursor.style.top = detl.y+'px';
})