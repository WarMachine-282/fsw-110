// make the box disapear when the user clicks it
const whiteBox = document.getElementsByClassName("red-box")
whiteBox[0].addEventListener("click", function(e){
    whiteBox[0].style.backgroundColor = "transparent"
})
