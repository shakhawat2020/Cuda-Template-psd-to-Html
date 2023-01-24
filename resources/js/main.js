$(document).ready(function(){

    //NAVITATION
        window.addEventListener("scroll", function(){
            var menu = document.querySelector("nav");
            menu.classList.toggle("sticky" , window.scrollY > 100);
        });


    


    
        
    //MIXITUP
    var mixer= mixitup('.container');
});

//MOBILE MENU
function openMenu() {
    document.getElementById("open").style.width = "100%";
}
function closeMenu(){
    document.getElementById("open").style.width = "0%";
}






