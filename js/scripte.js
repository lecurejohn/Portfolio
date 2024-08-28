// les methode pour creer une fonction 
// function openMenu(){

// }   ou bien 

const openMenu = () => {
    const menu = document.querySelector(".header.menu");
    menu.classList.toggle("active");
    if (menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML = "close_fullscreen"
    }
    else{
        document.querySelector("header .material-icons").innerHTML = "widgets"
    }

}