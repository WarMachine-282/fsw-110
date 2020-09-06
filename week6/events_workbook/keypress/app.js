/* Your task is to display to the user the key and key code they press.
Example of output: You've pressed the "a" key. It's key code is 65.
Wes Bos made this https://keycode.info/ for us to use as an example. */
function key(event) {
    const x = event.which || event.keyCode;
    const y = event.key;
    document.getElementById("output").innerHTML = `You pressed "${y}"... The key code for that is: ${x}`;
  }
document.body.addEventListener("keydown", key);