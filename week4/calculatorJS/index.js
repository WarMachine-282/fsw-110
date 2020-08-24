
function divTotal(){ 
    num1 = document.getElementById("divNum1").value;
    num2 = document.getElementById("divNum2").value;
    document.getElementById("totalOne").innerHTML = num1 / num2;
}
function subtractTotal(){
    num1 = document.getElementById("subNum1").value;
    num2 = document.getElementById("subNum2").value;
    document.getElementById("totalTwo").innerHTML = num1 - num2;
}
function multiplyTotal(){
    num1 = document.getElementById("mulNum1").value;
    num2 = document.getElementById("mulNum2").value;
    document.getElementById("totalThree").innerHTML = num1 * num2;
}