const form = document.mainForm;
const formContainer = document.getElementById("myListWithButtons");
const item = document.getElementById("list");
const listElement = document.getElementById("description");
const liElements = [];
let test = document.getElementById("test");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = document.getElementById("title").value;
  if (inputValue === "") {
    alert("Need to at least input a task");
  } else {
    addListToDOM(inputValue);
  }
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});
function clickedTask() {
  this.classList.toggle("checked");
}
function createTaskElement(addToLists) {
  let deleteButton = document.createElement("button");
  let theLabel = document.createElement("label");
  let listItem = document.createElement("li");
  let des = document.getElementById("description").value;
  theLabel.innerText = des + ". | " + addToLists + ". ";
  deleteButton.innerText = "Delete";
  listItem.onclick = clickedTask;
  deleteButton.onclick = deleteAction;
  deleteButton.className = "delete";
  listItem.appendChild(theLabel);
  listItem.appendChild(deleteButton);
  return listItem;
}
function addListToDOM(taskedItem) {
  let theListItem = createTaskElement(taskedItem);
  item.append(theListItem);
}
function deleteAction() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }