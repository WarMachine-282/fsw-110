
for (var i = 0; i < 5; i++) {
    var newh2 = document.createElement('h2')
    newh2.textContent = "Hello World";
    newh2.style.color = "blue";
    newh2.style.fontSize = "20px";
    newh2.style.fontWeight = "lighter";
    newh2.style.fontFamily = "sans-serif";
    newh2.style.color = "cornflowerblue";
    newh2.classList.add("border");
    document.body.append(newh2);

}