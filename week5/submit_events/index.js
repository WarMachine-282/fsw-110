document.signUp.addEventListener("submit", function(d){
        d.preventDefault()

        var username = document.signUp.username.value
        var email = document.signUp.email.value
        var password = document.signUp.password.value

        alert(` Sign up initiated!\n ${username} taken.\n ${email} available.\n ${password} not compatible.`)
})








// const myForm = document.getElementById("signUp");
// const submitBtn = document.getElementById("submit");
// submitBtn.addEventListener("click", message)


// function message(){
//     let username = myForm.elements["Username"].value;
//     let email = myForm.elements["Email"].value;
//     let password = myForm.elements["Password"].value;
    
//     alert(`Hello ${username} ${email}!\nSo your favorite language is: ${password} congrats!\nOh good, you would like to learn  next!`)    
// }