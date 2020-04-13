
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

// function for third nav toggling activity

// declaration of variables
var nav2InputText = document.getElementById("nav2InputText");
var myToggleOpen = document.getElementById("secton2ToggleOpen");
// myToggleOpen.setAttribute("class", "se")
var myToggleClose = document.getElementById("secton2ToggleClose");
var displayNav3 = document.getElementById("nav3");
var secondNavDiv2 = document.getElementById("secondNavDiv2")

// function to determine the size of the browser window
function screenResize(){
    screenSize = document.body.clientWidth;
    if(screenSize <= 992){
        displayNav3.style.display = "none"
        myToggleOpen.style.display = "inline";
        myToggleClose.style.display = "none";
        secondNavDiv2.style.display = "none";
        nav2InputText.style.display = "none";
    } else{
        displayNav3.style.display = "flex"
        secondNavDiv2.style.display = "flex";
        nav2InputText.style.display = "flex";
        nav2InputText.style.width = "17%";
    }
}

// function thats toggles the menu Icon
function navToggle(c){
    if(c == myToggleOpen){
        myToggleOpen.style.display = "none";
        myToggleClose.style.display = "inline";
        displayNav3.style.display = "block"
    } else if(c == myToggleClose){
            myToggleClose.style.display = "none";
            myToggleOpen.style.display = "inline";
            displayNav3.style.display = "none"
    } else{
        if(nav2InputText.style.display == "none"){
            nav2InputText.parentElement.style.display = "block";
            nav2InputText.style.display = "block";
            nav2InputText.style.width = "100%";
        } else {
            nav2InputText.style.display = "none";
        }
    }
}

// END of function for third nav toggling activity
