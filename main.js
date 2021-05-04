const active1 = document.getElementById("active1");
const active2 = document.getElementById("active2");
const active3 = document.getElementById("active3");
const active4 = document.getElementById("active4");
const active5 = document.getElementById("active5");
const active6 = document.getElementById("active6");
const active7 = document.getElementById("active7");
const buttons = document.getElementById("buttons");
const clicked = document.getElementById("clicked");
const ortga = document.getElementById("ortga");
const batafsil = document.getElementById("batafsil");
const download = document.getElementById("download");
const aboutText = document.getElementById("about-text");


function btn3(){
    active1.style.width = "130%"
    active1.style.height = "1150px"
    active1.style.marginLeft = "-150px"
    active1.style.top = "-150px"
    active1.style.transform = "rotate(-4.5deg)"

    active2.style.width = "120%"
    active2.style.top = "160px"
    active2.style.transform = "rotate(-4deg)"

    active3.style.width = "150%"
    active3.style.height = "1150px"
    active3.style.top = "-150px"
    active3.style.marginLeft = "-150px"

    active4.style.top = "-550px"
    active4.style.right = "-550px"
    
    active5.style.bottom = "-900px"
    active5.style.right = "26%"
    active5.style.width = "60%"
    active5.style.height = "550px"

    active6.style.bottom = "-1000px"
    active6.style.right = "26%"
    active6.style.width = "60%"
    active6.style.height = "450px"

    active7.style.bottom = "-900px"
    active7.style.right = "26%"
    active7.style.width = "60%"
    active7.style.height = "500px"

    buttons.style.opacity = "0"
    buttons.style.transition = "3s"    

    clicked.style.opacity = "1"
    clicked.style.zIndex = "9"
    clicked.style.transition = "5s"

    ortga.style.cursor = "pointer"

}
function back(){
    active1.style.width = "100%"
    active1.style.height = "720px"
    active1.style.marginLeft = "0"
    active1.style.top = "0"
    active1.style.transform = "rotate(0)"

    active2.style.width = "100%"
    active2.style.top = "0"
    active2.style.transform = "rotate(0)"

    active3.style.width = "100%"
    active3.style.height = "720px"
    active3.style.top = "0"
    active3.style.marginLeft = "0"

    active4.style.top = "0"
    active4.style.right = "0"
    
    active5.style.bottom = "-720px"
    active5.style.right = "0"
    active5.style.width = "80%"
    active5.style.height = "720px"

    active6.style.bottom = "-720px"
    active6.style.right = "0"
    active6.style.width = "80%"
    active6.style.height = "650px"

    active7.style.bottom = "-720px"
    active7.style.right = "0"
    active7.style.width = "80%"
    active7.style.height = "650px"

    buttons.style.opacity = "1"
    buttons.style.transition = "3s"    

    clicked.style.opacity = "0"
    clicked.style.transition = "5s"

    ortga.style.cursor = "auto"

}


function btn1(){
    active1.style.width = "130%"
    active1.style.height = "820px"
    active1.style.marginLeft = "-150px"

    active2.style.top = "60px"

    active3.style.width = "150%"
    active3.style.height = "1150px"
    active3.style.top = "-150px"
    active3.style.marginLeft = "-150px"

    active4.style.top = "130px"
    active4.style.right = "-3.8%"
    active4.style.width = "75%"
    active4.style.height = "600px"    
    
    active5.style.bottom = "-750px"
    active5.style.right = "-2%"
    active5.style.width = "70%"
    active5.style.height = "550px"

    active6.style.bottom = "-750px"
    active6.style.right = "-2%"
    active6.style.width = "70%"
    active6.style.height = "550px"

    active7.style.bottom = "-780px"
    active7.style.right = "-3%"
    active7.style.width = "70%"
    active7.style.height = "550px"
    
    batafsil.style.display = "none"
    batafsil.style.transition = "3s"

    download.style.display = "none"
    download.style.transition = "3s"

    aboutText.style.opacity = "1"
    aboutText.style.transition = "5s"
    aboutText.style.zIndex = "9"

}

function btn2(){
    active1.style.width = "100%"
    active1.style.height = "720px"
    active1.style.marginLeft = "0"

    active2.style.top = "0"

    active3.style.width = "100%"
    active3.style.height = "720px"
    active3.style.top = "0"
    active3.style.marginLeft = "0"

    active4.style.top = "0"
    active4.style.right = "0"
    active4.style.width = "80%"
    active4.style.height = "680px"    
    
    active5.style.bottom = "-720px"
    active5.style.right = "0"
    active5.style.width = "80%"
    active5.style.height = "720px"

    active6.style.bottom = "-720px"
    active6.style.right = "0"
    active6.style.width = "80%"
    active6.style.height = "650px"

    active7.style.bottom = "-720px"
    active7.style.right = "0"
    active7.style.width = "80%"
    active7.style.height = "650px"
    
    batafsil.style.display = "block"
    batafsil.style.transition = "3s"

    download.style.display = "block"
    download.style.transition = "3s"

    aboutText.style.opacity = "0"
    aboutText.style.transition = "5s"
    aboutText.style.zIndex = "0"

}