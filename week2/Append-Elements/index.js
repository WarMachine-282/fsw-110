var h1 = document.createElement("h1")
h1.textContent = "Welcome to my JS site"
document.body.append(h1)

var p = document.createElement("p")
p.textContent = "All of this was created with Javascript"
document.body.append(p)

var ol = document.createElement("ol")
ol.textContent = ""
document.body.append(ol)

var array =["item1", "item2", "item3", "item4", "item5","item6"]
for (var i = 0; i < array.length; i ++){
var li1 = document.createElement("li")
li1.textContent = array [i]
document.body.append(li1)
}
console.log(i)