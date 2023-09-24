let status = document.querySelector('#status');
let btn = document.querySelector('button');
let flag = false;

btn.addEventListener("click",function(){
    if(flag == false){
        status.innerHTML = 'friend';
        status.style.color = 'green';
        this.id = 'remove';
        this.innerHTML = 'Remove';
        flag = true;
    }else{
        status.innerHTML = 'stranger';
        status.style.color = 'red';
        this.id = 'add';
        this.innerHTML = 'Add friend';
        flag = false;
    }
})