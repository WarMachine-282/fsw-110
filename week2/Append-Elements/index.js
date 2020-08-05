var newh1 = document.createElement("h1")
newh1.textContent = "Welcome to my JS site"
var myFirst = document.getElementById("first")
myFirst.append(newh1)

var newp = document.createElement("p")
newp.textContent = "All of this was created with Javascript"
var mySecond = document.getElementById("second")
myFirst.append(newp)

var newli = document.createElement("li")
newli.textContent = ""
var myThird = document.getElementById("third")
myFirst.body.append(newli)