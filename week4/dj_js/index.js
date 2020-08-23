var box = document.createElement('div');
box.style.backgroundColor = "black"
box.style.width = "200px";
box.style.height = "200px";
box.style.margin = "45%";
box.style.marginTop = "15%"
document.body.append(box);

function red(){
    box.style.backgroundColor = "red"
}
function orange(){
    box.style.backgroundColor = "orange"
}
function yellow(){
    box.style.backgroundColor = "yellow"
}
function green(){
    box.style.backgroundColor = "green"
}
function blue(){
    box.style.backgroundColor = "blue"
}

function key(event){
    console.log(event)
    if (event.key == "r"){
        red()
    } else if (event.key == "o"){
        orange()
    } else if (event.key == "y"){
        yellow()
    } else if (event.key == "g"){
        green()
    } else if (event.key == "b"){
        blue()
    }
}
box.addEventListener("mouseover", blue)
box.addEventListener("mousedown", red)
box.addEventListener("mouseup", yellow)
box.addEventListener("dblclick", green)
document.addEventListener("scroll", orange)
window.addEventListener("keydown", key)
