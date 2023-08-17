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

function btnLeft(){
    imgCont = imgCont - 1
    if(imgCont<1){
        imgCont = 14
    } else {}

    if(imgCont === 1){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (1).jpg")
    img.setAttribute("alt", "img1")
    } else {}
    if(imgCont === 2){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (2).jpg")
    img.setAttribute("alt", "img2")
    } else {}
    if(imgCont === 3){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (3).jpg")
    img.setAttribute("alt", "img3")
    } else {}
    if(imgCont === 4){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (4).jpg")
    img.setAttribute("alt", "img4")
    } else {}
    if(imgCont === 5){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (5).jpg")
    img.setAttribute("alt", "img5")       
    } else {}
    if(imgCont === 6){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (6).jpg")
    img.setAttribute("alt", "img6")       
    } else {}
    if(imgCont === 7){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (7).jpg")
    img.setAttribute("alt", "img7")       
    } else {}
    if(imgCont === 8){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (8).jpg")
    img.setAttribute("alt", "img8")       
    } else {}
    if(imgCont === 9){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (9).jpg")
    img.setAttribute("alt", "img9")       
    } else {}
    if(imgCont === 10){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (10).jpg")
    img.setAttribute("alt", "img10")       
    } else {}
    if(imgCont === 11){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (11).jpg")
    img.setAttribute("alt", "img11")       
    } else {}
    if(imgCont === 12){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (12).jpg")
    img.setAttribute("alt", "img12")       
    } else {}
    if(imgCont === 13){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (13).jpg")
    img.setAttribute("alt", "img13")       
    } else {}
    if(imgCont === 14){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (14).jpg")
    img.setAttribute("alt", "img14")       
    } else {}
}
function btnRight(){
    imgCont = imgCont + 1
    if(imgCont>14){
        imgCont = 1
    } else {}

    if(imgCont === 1){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (1).jpg")
    img.setAttribute("alt", "img1")
    } else {}
    if(imgCont === 2){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (2).jpg")
    img.setAttribute("alt", "img2")
    } else {}
    if(imgCont === 3){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (3).jpg")
    img.setAttribute("alt", "img3")
    } else {}
    if(imgCont === 4){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (4).jpg")
    img.setAttribute("alt", "img4")
    } else {}
    if(imgCont === 5){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (5).jpg")
    img.setAttribute("alt", "img5")       
    } else {}
    if(imgCont === 6){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (6).jpg")
    img.setAttribute("alt", "img6")       
    } else {}
    if(imgCont === 7){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (7).jpg")
    img.setAttribute("alt", "img7")       
    } else {}
    if(imgCont === 8){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (8).jpg")
    img.setAttribute("alt", "img8")       
    } else {}
    if(imgCont === 9){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (9).jpg")
    img.setAttribute("alt", "img9")       
    } else {}
    if(imgCont === 10){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (10).jpg")
    img.setAttribute("alt", "img10")       
    } else {}
    if(imgCont === 11){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (11).jpg")
    img.setAttribute("alt", "img11")       
    } else {}
    if(imgCont === 12){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (12).jpg")
    img.setAttribute("alt", "img12")       
    } else {}
    if(imgCont === 13){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (13).jpg")
    img.setAttribute("alt", "img13")       
    } else {}
    if(imgCont === 14){
    img.setAttribute("src", "Assets/Galeria de imagens/_ (14).jpg")
    img.setAttribute("alt", "img14")       
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