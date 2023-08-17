$("#btn-left-click").click(btnLeft)
$("#btn-right-click").click(btnRight)
$(".logo3").click(btnGmail)
$(".btnHome").click(btnHome)
$(".btnAbout").click(btnAbout)
$(".btnGalery").click(btnGalery)
$(".btnContact").click(btnContact)



let imgCont = 1
const img = document.querySelector(".frame img")
const gmail = document.querySelector(".email-adress-text")
document.cookie = "witcher=Geralt; SameSite=None; Secure"

function btnLeft(){
    imgCont = imgCont - 1
    if(imgCont<1){
        imgCont = 9
    } else {}

    if(imgCont === 1){
    img.setAttribute("src", "https://i.imgur.com/2KIvIGN.jpg")
    img.setAttribute("alt", "img1")
    } else {}
    if(imgCont === 2){
    img.setAttribute("src", "https://i.imgur.com/JGbAXE7.jpg")
    img.setAttribute("alt", "img2")
    } else {}
    if(imgCont === 3){
    img.setAttribute("src", "https://i.imgur.com/fFYoKjk.jpg")
    img.setAttribute("alt", "img3")
    } else {}
    if(imgCont === 4){
    img.setAttribute("src", "https://i.imgur.com/nfYpx1r.jpg")
    img.setAttribute("alt", "img4")
    } else {}
    if(imgCont === 5){
    img.setAttribute("src", "https://i.imgur.com/9uaW8jd.jpg")
    img.setAttribute("alt", "img5")       
    } else {}
    if(imgCont === 6){
    img.setAttribute("src", "https://i.imgur.com/kzwyV8Q.jpg")
    img.setAttribute("alt", "img6")       
    } else {}
    if(imgCont === 7){
    img.setAttribute("src", "https://i.imgur.com/QVWzNEO.jpg")
    img.setAttribute("alt", "img7")       
    } else {}
    if(imgCont === 8){
    img.setAttribute("src", "https://i.imgur.com/DHgEzAs.jpg")
    img.setAttribute("alt", "img8")       
    } else {}
    if(imgCont === 9){
    img.setAttribute("src", "https://i.imgur.com/09yt3Fa.jpg")
    img.setAttribute("alt", "img9")       
    } else {}
}

function btnRight(){
    imgCont = imgCont + 1
    if(imgCont>9){
        imgCont = 1
    } else {}

    if(imgCont === 1){
    img.setAttribute("src", "https://i.imgur.com/2KIvIGN.jpg")
    img.setAttribute("alt", "img1")
    } else {}
    if(imgCont === 2){
    img.setAttribute("src", "https://i.imgur.com/JGbAXE7.jpg")
    img.setAttribute("alt", "img2")
    } else {}
    if(imgCont === 3){
    img.setAttribute("src", "https://i.imgur.com/fFYoKjk.jpg")
    img.setAttribute("alt", "img3")
    } else {}
    if(imgCont === 4){
    img.setAttribute("src", "https://i.imgur.com/nfYpx1r.jpg")
    img.setAttribute("alt", "img4")
    } else {}
    if(imgCont === 5){
    img.setAttribute("src", "https://i.imgur.com/9uaW8jd.jpg")
    img.setAttribute("alt", "img5")       
    } else {}
    if(imgCont === 6){
    img.setAttribute("src", "https://i.imgur.com/kzwyV8Q.jpg")
    img.setAttribute("alt", "img6")       
    } else {}
    if(imgCont === 7){
    img.setAttribute("src", "https://i.imgur.com/QVWzNEO.jpg")
    img.setAttribute("alt", "img7")       
    } else {}
    if(imgCont === 8){
    img.setAttribute("src", "https://i.imgur.com/DHgEzAs.jpg")
    img.setAttribute("alt", "img8")       
    } else {}
    if(imgCont === 9){
    img.setAttribute("src", "https://i.imgur.com/09yt3Fa.jpg")
    img.setAttribute("alt", "img9")       
    } else {}
}

function btnGmail(){
    gmail.classList.toggle("email-adress-text")
}
function btnHome(){
    window.scrollTo({
        top: 150,
        behavior: "smooth", 
    })
}
function btnAbout(){
    window.scrollTo({
        top: 868,
        behavior: "smooth",
    })
}
function btnGalery(){
    window.scrollTo({
        top: 1640,
        behavior: "smooth",    
    })
}
function btnContact(){
    window.scrollTo({
        top: 2412,
        behavior: "smooth",
    })
}