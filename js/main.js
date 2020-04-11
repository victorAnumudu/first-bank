
// Code that makes the section3Nav retain the hover color if its innerlist is displayed
function myActive(c){
    c.parentElement.style.backgroundColor = "#F0F6FF";
}
function myNotActive(c){
    c.parentElement.style.backgroundColor = "white";
}
// End of Code that makes the section3Nav retain the hover color if its innerlist is displayed



// code for section4Slide SHOW
var mySlideCon = document.getElementById("section4Slide");
var mySlide = document.getElementById("section4SlideImage").getAttribute("id");
var mySlide2 = document.getElementById("section4SlideImage2").getAttribute("id");

function shiftMe(c){
    if((c.parentElement.style.left == 0 || (c.parentElement.style.left != 0)) &&  c.getAttribute("id") == mySlide){
        c.parentElement.style.left = 0;
    } else if((c.parentElement.style.left == 0 || (c.parentElement.style.left != 0)) &&  c.getAttribute("id") == mySlide2){
        c.parentElement.style.left = "-80%";
    }
}
// End of code for section4Slide SHOW


function myMenuShow(c){
    var slideToggle = document.getElementsByClassName("section4SlideImage2Menu");
    var myMenu = document.getElementsByClassName("section4SlideImage2MenuDescription");
    for(var i in slideToggle){
        if(c == slideToggle[i]){
            myMenu[i].style.display = "flex";
            slideToggle[i].style.color = "rgb(197, 162, 5)";
            slideToggle[i].style.borderBottom = "5px inset rgb(197, 162, 5)";
        } else{
            myMenu[i].style.display = "none";
            slideToggle[i].style.color = "";
            slideToggle[i].style.borderBottom = "";
        }
    }
}


function navToggle(c){
    var myToggleOpen = document.getElementById("secton2ToggleOpen");
    var myToggleClose = document.getElementById("secton2ToggleClose");
    if(c == myToggleOpen){
        myToggleClose.style.display = "inline";
        myToggleOpen.style.display = "none";
    } else{
        myToggleOpen.style.display = "inline";
        myToggleClose.style.display= "none";
    }
}