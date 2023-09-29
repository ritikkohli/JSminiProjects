const container = document.querySelector("#container");
     
const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
    }
}

container.addEventListener("mousemove", throttleFunction((detl)=>{
    let div = document.createElement('div');
    let img = document.createElement('img');

    div.classList.add('imgDiv');
    div.style.left = detl.clientX + 'px';
    div.style.top = detl.clientY + 'px';

    img.setAttribute('src','file:///C:/Users/Administrator/Documents/temp/farmer.jpg');
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y : '0',
        ease : Power1,
        duration : 0.6
    })

    gsap.to(img,{
        y : '100%',
        ease : Power2,
        duration : 0.6,
        delay : 0.6
    })
    setTimeout(function(){
        div.remove();
    },2000)
}, 400));