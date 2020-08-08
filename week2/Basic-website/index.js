
    var nav = document.createElement("NAV");  //my navbar
    document.body.appendChild(nav);
  
    var anchorElmnt = document.createElement("A"); //first non operational link
    anchorElmnt .setAttribute("href", "/html");
    var txt1 = document.createTextNode("Home");
    anchorElmnt.appendChild(txt1);
  
    nav.appendChild(anchorElmnt);

    var anchorElmntTwo = document.createElement("B"); //Second link
    anchorElmntTwo .setAttribute("href", "/About");
    var txt2 = document.createTextNode(" About");
    anchorElmnt.appendChild(txt2);
  
    var anchorElmntThree = document.createElement("C"); //Third link
    anchorElmntThree .setAttribute("href", "/Contact");
    var txt3 = document.createTextNode(" Contact");
    anchorElmnt.appendChild(txt3);
  
    var h1 = document.createElement("h1") //my h1 element
    h1.textContent = "Welcome to my JS site"
    document.body.append(h1)

    var p = document.createElement("p")
    p.textContent = "All of this was created with Javascript" //my paragraph element
    document.body.append(p)

    var ol = document.createElement("ol") //my ol element
    ol.textContent = ""
    document.body.append(ol)

    var array =["item1", "item2", "item3", "item4", "item5","item6"] //my list in form of array
    for (var i = 0; i < array.length; i ++){
    var li1 = document.createElement("li")
    li1.textContent = array [i]
    document.body.append(li1)
    }
    console.log(i)

    
    var f = document.createElement("FOOTER"); // my footer
    document.body.appendChild(f);
    var p = document.createElement("P");
    var txt = document.createTextNode("Copyright ©, 2020");
    p.appendChild(txt);
    f.appendChild(p);