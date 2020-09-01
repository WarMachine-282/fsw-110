document.getElementById("submit").addEventListener("click", () => {
        var username = document.getElementById("username").value, 
        email = document.getElementById("email").value, 
        password = document.getElementById("password").value;
        
        alert(` Sign up initiated!\n ${username} taken.\n ${email} available.\n ${password} not compatible.`)
})







