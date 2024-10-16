const inputbox = document.getElementById("inputbox");
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("taskitems");

const addToDo = () => {
  const inputText = inputbox.value.trim();
  if (inputText.length <= 0) {
    alert("You must add write something to add.");
  }

  // creating p tag
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  toDoList.appendChild(li);

  //creating edit btn
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("editBtn");
  li.appendChild(editBtn);

  // creating del btn
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delBtn");
  li.appendChild(deleteBtn);
};

addBtn.addEventListener("click", addToDo);
