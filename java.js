let btn = document.getElementsByClassName("bienvenue_bar_menu")[0];
let menu = document.getElementsByClassName("bienvenue_liens")[0];
let site = true;

btn.addEventListener("click",function () {
    if (menu.hasAttribute("id")) {
        menu.style.display = "block";
        menu.removeAttribute("id","liens");
    }else{
        menu.style.display ="none"
        menu.setAttribute("id","liens");
    
    }
 
  
})
