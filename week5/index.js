  
// var box1 = document.getElementById("box1"); 
// var box2 = document.getElementById("box2"); 
// var box3 = document.getElementById("box3");
// var result = Number(box1.value) + Number(box2.value); box3.innerHTML = result;
function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber2").value;
        num2 = document.getElementById("secondNumber2").value;
document.getElementById("divide").innerHTML = num1 / num2;
}



function subBy(){
        num1 = document.getElementById("firstNumber1").value;
        num2 = document.getElementById("secondNumber1").value;
        document.getElementById("subtract").innerHTML = num1 - num2;

}