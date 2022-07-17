let vid = document.createElement("video")
let img = document.createElement("img")
img.src = "https://d10zotjm62noji.cloudfront.net/arcade+.png"
    img.style.width = "100%"
    img.style.height = "100%"
    img.style.objectFit = "fill"
vid.src = "https://d10zotjm62noji.cloudfront.net/arcade0000-0180.mp4"
vid.muted = true
vid.autoplay = false
vid.loop = false
vid.playbackRate = "2"
vid.style.width = "100%"
vid.style.height = "100%"
vid.style.objectFit = "fill"
vid.onloadeddata = function(){
    if (vid.readyState >= 3){
        document.body.append(vid)
        vid.play()
    }
    
}
vid.addEventListener('ended',(e)=>{
    console.log('ended')
    if(img.complete){
        document.body.append(img)
        document.body.removeChild(vid)      
    }
    
    
})


