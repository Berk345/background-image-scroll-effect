const BgimageEL = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    Updateimage()
})

function Updateimage() {
    BgimageEL.style.opacity = 1 - window.pageYOffset / 900
    BgimageEL.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}