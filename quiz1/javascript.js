document.addEventListener("scroll", shadow);

function shadow(){
    let navbar = document.querySelector("div");
    console.log(scrollY);
    if(window.scrollY > 20){
        navbar.classList.add("shadow");
    }
    else {
        navbar.classList.remove("shadow");
    }
}