let arr = [
    {dp:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/9/2023_9$largeimg_670508112.jpeg",
    story:"https://propunjabtv.com/wp-content/uploads/2022/10/channels4_profile-1.jpg"},
    {dp:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJwmmWmJF1iNOEZa_W0tkQUBbT2GCi6pgrxnctFmL36NGzfqYkwtTyRPTksgv0bDDfcoNdND_EdTBOS8mWWJVVH_f1BsuXfL723N8kLCHzS9YQGkPIQJKnSPeLNS4gYwIu24GQ5vOtGwKoPVdM1GvjHwOUubysTuMulH7UKpeORTFHeKZxWGYypvdc/s960/mankirt.jpg",
    story:"https://i1.sndcdn.com/artworks-KifUPyqkPaE7bhni-VqXOjw-t500x500.jpg"},
    {dp:"https://1.bp.blogspot.com/-f2Qze2WfvfE/XiPZ5hbwmsI/AAAAAAAAARs/R4SMX7S-IoIIHczDHqbUSi2j2yUA6zBqQCLcBGAsYHQ/s1600/PicsArt_01-17-10.03.32.jpg",
    story:"https://e0.pxfuel.com/wallpapers/64/250/desktop-wallpaper-babbu-maan-in-2020-guy-latest-thumbnail.jpg"},
    {dp:"https://cdns-images.dzcdn.net/images/artist/8e23b0bd5f496a1a9358b755f071d46f/500x500.jpg",
    story:"https://www.lycagold.com/wp-content/uploads/2022/04/1649240163-3a05e620-ea19-44b5-a758-709db2abd5dc-5cAkpy-1024x1024.png"},
    {dp:"https://img.mensxp.com/media/content/2021/Jun/Header_60bdebbb73dfd.jpeg?w=656&h=432&cc=1",
    story:"https://i.pinimg.com/originals/6b/ac/96/6bac96d193d03d1cd716fd3dea3cc68f.jpg"},
    {dp:"https://voiceonline.com/wp-content/uploads/2022/04/HEADLINES-MANN.jpg",
    story:"https://i.pinimg.com/736x/a7/a5/4a/a7a54a79ec59520ed851593ceeb5b30f.jpg"},
    {dp:"https://superstarsbio.com/wp-content/uploads/2021/04/Parmish-Verma.jpg",
    story:"https://i.pinimg.com/1200x/78/16/e3/7816e3ebe66cf7ef66321e81d4a36677.jpg"},
    {dp:"https://i.pinimg.com/1200x/47/b6/ee/47b6ee8399623d35193974e69be6b8ef.jpg",
    story:"https://i.pinimg.com/1200x/a3/8f/0e/a38f0edc205b43f9ca3dc9f11a7245f7.jpg"}
];

let cultter = "";
let story_panel = document.querySelector('#story-container');

arr.forEach(function(elem,idx){
    cultter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="dp">
    </div>`
    
})

story_panel.innerHTML = cultter;

story_panel.addEventListener('click',function(dets){
    let fullScreen = document.querySelector("#full-scrn");
    fullScreen.style.display = "block";
    fullScreen.innerHTML = `<img src="${arr[dets.target.id].story}" alt="story">`;
    fullScreen.addEventListener('click',function(){
        this.style.display = 'none';
    })
    setTimeout(function(){
        fullScreen.style.display = "none";
    },5000)
})

