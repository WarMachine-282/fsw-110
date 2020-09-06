const whiteBox = document.getElementsByClassName("red-box")[0]
    console.log(whiteBox)
whiteBox.addEventListener("mousemove", function(e){
    console.log(e)
    const x = e.x;
    const y = e.y;
    whiteBox.textContent = `"${y}": "${x}"`;
})
