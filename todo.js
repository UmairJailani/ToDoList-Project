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

  // Edit Function in the edit Button

  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your Task.", p.innerHTML);
    if (newText !== null && newText.trim() !== "") {
      p.innerHTML = newText.trim();
    }
  });

  // creating del btn

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delBtn");
  li.appendChild(deleteBtn);

  // Delete function in the Del Button

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
};

addBtn.addEventListener("click", addToDo);

inputbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToDo();
  }
});
