var form = document.personalInformation
console.log(form)

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault()
    var firstName = document.personalInformation.firstName.value 
    lastName = document.personalInformation.lastName.value 
    age = document.personalInformation.age.value
    gender = document.personalInformation.gender.value 
    country = document.personalInformation.country.value 
    var diet = []

    if(document.personalInformation["Shelfish"].checked) {
        diet.push(document.getElementById("Shelfish").value)
    }
    if(document.personalInformation["Pork"].checked) {
        diet.push(document.getElementById("Pork").value)
    }
    if(document.personalInformation["Dairy"].checked) {
        diet.push(document.getElementById("Dairy").value)
    }
    if(document.personalInformation["Wheat"].checked) {
        diet.push(document.getElementById("Wheat").value)
    }
    if(document.personalInformation["None"].checked) {
        diet.push(document.getElementById("None").value)
    }
    
    alert (`
        First name: ${firstName} 
        Last name: ${lastName} 
        Age: ${age} 
        Gender: ${gender}
        Country: ${country}
        Dietary Restrictions: ${diet}`)
            
});
