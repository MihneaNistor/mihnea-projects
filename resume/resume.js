const menu = document.querySelector(".menu");
const menuItems = menu.getElementsByTagName("li");
const hamburger = document.querySelector(".fa");
const hamburgerMenu = document.getElementById("hamburger-menu");

window.onscroll = function(){menuScroll()};
function menuScroll() {
  let htmlBar = document.querySelector(".html-bar");
  let width = 10;
  if (document.body.scrollTop > 450  || document.documentElement.scrollTop > 450)  {
    menu.style.minHeight = "1em";
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].style.marginTop = ".9em";
      menuItems[i].style.marginBottom = "1em";
     }
     menu.style.opacity = "1";
     hamburger.style.marginTop = ".3em";
     hamburger.style.marginBottom = ".3em";
   } else if(document.body.scrollTop <= 450  || document.documentElement.scrollTop <= 450){
     menu.style.minHeight = "8em";
     for (let i = 0; i < menuItems.length; i++) {
       menuItems[i].style.marginTop = "2.5em";
       menuItems[i].style.marginBottom = "0";
       menuItems[i].style.transition = "0";
      }
      menu.style.transition = "0.3s";
      menu.style.opacity = "0.9";
      hamburger.style.marginTop = "1em";
      hamburger.style.marginBottom = "1em";
   }
    skillsScroll();
}


let closeMenu = document.querySelector(".close-menu");
closeMenu.addEventListener("click", closeMenuFunc);
closeMenu.style.display = "none";

function closeMenuFunc() {
  hamburgerMenu.style.display = "none";
    if(hamburgerMenu.style.display === "none") {
      closeMenu.style.display = "none";
      hamburger.style.display = "block";
    }
}


hamburger.addEventListener("click", hamburgerMenuDisplay);
hamburgerMenu.style.marginTop = "-70px";
for(let i = 0; i < menuItems.length; i++) {
  menuItems[i].style.marginBottom = "0.5em";
  menuItems[i].style.marginLeft = "1.5em";
}

function hamburgerMenuDisplay() {
  if (hamburgerMenu.style.display === "block") {
    hamburgerMenu.style.display = "none";
    closeMenu.style.display = "none";

  } else {
    hamburgerMenu.style.display = "block";
    hamburger.style.display = "none";
    hamburgerMenu.style.marginTop = "30px";
    closeMenu.style.display = "block";
  }
}

let ok = 0;

 function skillsScroll() {
   if (ok == 1)
    return;
   if (document.documentElement.scrollTop > 1600 || document.body.scrollTop > 1600) {
      ok = 1;
      let bar = document.getElementsByClassName("bar");
      for (let i = 0; i < bar.length; i++) {
         let width = 10;
         let barText = bar[i].innerText.split(' ');
         let barPercentText = barText[1].substring(0, (barText[1].length - 1))
         let barPercent = parseInt(barPercentText);
            while(width < barPercent) {
                width++;
                bar[i].style.width = width + "%";
            }
        }
      }
  }
