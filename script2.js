// const body = document.querySelector("body");

const form = document.getElementById('form');
const formInput = document.querySelector(".form-input");
const todoInput = document.querySelector(".todo-input");

// TODO CONTAINER
const todoContainer = document.querySelector(".todo-container");
const todoBox = document.querySelector(".todo-box");
const todoBoxList = document.querySelector(".todo-box-list");
const todoBoxItem = document.getElementsByClassName(".todo-box-item");
const actionBar = document.querySelector(".action-bar");
// const todoText = document.querySelector(".todo-text");
// const todoBox = document.querySelector(".todo-box");

// ACTION BAR BUTTONS
const itemsLeft = document.querySelector(".items-left-total");
const clearBtn = document.querySelector(".clear");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");

// Moon & Sun Icons
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");



form.addEventListener("oninput", addTodo);
// window.addEventListener("DOMContentLoaded", setupItems);

// ADD NEW TODO TO LIST
function addTodo() {
	const inputText = document.getElementById('input-text');
	inputText.addEventListener("onchange", function(e) {
		e.preventDefault();


	const value = inputText.value;
	const id = new Date().getTime().toString();
	
console.log(value)
	if (value !== "") {
		const element = document.createElement("div");
		let attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.classList.add("todo-box-list");
		element.innerHTML = `
			<input type="checkbox" class="check-input check-todo--box">
            <p class="todo-text">${value}</p>

            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross">
          </div>
		`;
console.log(element)
		const checkedTodoBox = element.querySelector(".check-todo--box");
		checkedTodoBox.addEventListener("click", markTodoText);
		console.log(checkedTodoBox)

		const deleteCross = element.querySelector(".icon-cross");
		deleteCross.addEventListener("click", deleteItem);

		todoBox.appendChild(element);
console.log(todoBox)
		todoContainer.classList.add("show-container");

		// addToLocalStorage(id, value);

		// setBackToDefault();

	}

	})
	

}

// DELETE ITEM
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	 todoBox.removeChild(element);

	 if (todoBox.children.length === 0) {
	 	container.classList.remove("show-container");
	 }
	 setBackToDefault();

	 removeFromLocalStorage(id);
}




// DARK AND LIGHT THEMES
const theme = document.documentElement;

theme.classList.add("light");


moonIcon.addEventListener("click", function(){
	
	theme.classList.remove("light");
	theme.classList.add("dark");
	moonIcon.style.display = "none";
	sunIcon.style.display = "block";
	
})


sunIcon.addEventListener("click", function(){
	theme.classList.remove("dark");
	theme.classList.add("light");
	moonIcon.style.display = "block";
	sunIcon.style.display = "none";
	
})  

 //MARK TODO'S AS DONE 
 function markTodoText() {
 	const todoText = document.querySelector(".todo-text");
 		todoText.classList.toggle("complete");
 }
