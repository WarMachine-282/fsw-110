
//2.) Create an H1 tag with the text “Hello World”, and append it to the DOM (test and make sure it is showing up on the website)

// var newh1 = document.createElement('h1')
// newh1.textContent = 'Hello World'
// document.body.append(newh1)

//3.) Create a for-loop, repeat this process 10 times so that 10 H1’s with the text “Hello World” show up when the website is visited.
//4.) Add some style to the H1's in Step 3.

for (var i = 0; i < 10; i++) {
    var newh1 = document.createElement('h1')
    newh1.textContent = "Hello World";
    newh1.style.color = "blue";
    document.body.append(newh1);

}

//5.) Create a new array using the following information:

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for(var i = 0; i < names.length; i++) {
    var rollCall = document.createElement("p");
    rollCall.textContent = names[i];
    document.body.append(rollCall);
}