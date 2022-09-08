const form = document.getElementById("form");
const input = document.getElementById("input-text");
const todoContainer = document.querySelector(".todo-container");
const todoBox = document.querySelector(".todo-box");
const itemsLeft = document.querySelector(".items-left-total");
const todos = JSON.parse(localStorage.getItem("todos"));
const deleteBtn = document.querySelector(".delete-btn");
const clearCompleted = document.querySelector(".clear");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed"); 



// EVENT LISTENERS

// SUBMIT FORM
form.addEventListener("submit",	addTodo);

// CLEAR COMPLETED LIST
clearCompleted.addEventListener("click", clearItems);

// ALL ITEMS
allBtn.addEventListener("click", showAll);

// ACTIVE ITEMS
activeBtn.addEventListener("click", showActive);

// COMPLETED ITEMS
completedBtn.addEventListener("click", showCompleted);


// DISPLAY ITEMS ONLOAD
window.addEventListener("DOMContentLoaded", setupItems);




function addTodo(e) {
	e.preventDefault();

	let value = input.value;
	let id = Math.random().toString();

	if (value !== "") {
		
		const element = document.createElement("div");
		let attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.classList.add("todo-box-list");
		element.innerHTML = `
			<input type="checkbox" class="check-input check-todo--box">
            <p class="todo-text">${value}</p>
           
            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross" />
            
          </div>
		`;
// EVENT LISTENER ON CHECKED ICON
const checkedTodoBox = element.querySelector(".check-todo--box");


checkedTodoBox.addEventListener("click", checked);


		
// EVENT LISTENERS TO DELETE CROSS

	const deleteBtn = element.querySelector(".icon-cross");
    deleteBtn.addEventListener("click", deleteItem);

// APPEND CHILD
	todoBox.appendChild(element);

// ITEMS LEFT 
	itemsLeft.innerHTML = todoBox.children.length;

// SHOW CONTAINER
	todoContainer.classList.add("show-container");

// SET LOCAL STORAGE
	addToLocalStorage(id, value);

// SET BACK TO DEFAULT
 	input.value = "";
        
	}
}

function checked(e) {
	
	const element = e.currentTarget.parentElement;
	const id = element.dataset.id;
	const todoText = element.querySelector(".todo-text");
 		todoText.classList.toggle("complete");
	
	
	
}

// CLEAR ITEMS 
function clearItems() {
	const items = document.querySelectorAll("todo-box-list");
	if (items.length > 0) {
		items.forEach(function(item) {
			todoBox.removeChild(item);
			
		});
	}
	todoContainer.classList.remove("show-container");
	itemsLeft.innerHTML = 0;
	input.value = "";
	localStorage.removeItem("list");
}

// DELETE ITEMS
function deleteItem(e) {
	const element = e.currentTarget.parentElement;
	
	const id = element.dataset.id;

	todoBox.removeChild(element);
	

		itemsLeft.innerHTML = todoBox.children.length;
	if (todoBox.children.length === 0) {
		todoContainer.classList.remove("show-container");
	}
	input.value = "";
	removeFromLocalStorage(id);
}

// SHOW ALL ITEMS
function showAll() {
	getLocalStorage();
}

// SHOW ACTIVE ITEMS
function showActive() {

}

// SHOW COMPLETED ITEMS
function showCompleted() {

}


// LOCAL STORAGE
function addToLocalStorage(id, value) {
	const todo = {id, value};
	let items = getLocalStorage();
	items.push(todo);
	localStorage.setItem("list", JSON.stringify(items));
}
 function getLocalStorage() {
 	return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
 }

 function removeFromLocalStorage(id) {
 	let items = getLocalStorage();

 	items = items.filter(function (item) {
 		if(item.id !==id) {
 			return item;
 		}
 	});
 	localStorage.setItem("list", JSON.stringify(items));
 }

 // SETUP
 // LOCAL STORAGE

 function setupItems() {
 	let items = getLocalStorage();
 	if(items.length > 0) {
 		items.forEach(function (item) {
 			createListItem(item.id, item.value);
 		});
 		todoContainer.classList.add("show-container");
 	}
 }

 function createListItem(id, value) {
 	const element = document.createElement("div");
		let attr = document.createAttribute("data-id");
		attr.value = id;
		element.setAttributeNode(attr);
		element.classList.add("todo-box-list");
		element.innerHTML = `
			<input type="checkbox" class="check-input check-todo--box">
            <p class="todo-text">${value}</p>
            
            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross" />
          
          </div>
		`;
		
	const deleteBtn = element.querySelector(".icon-cross");
  	deleteBtn.addEventListener("click", deleteItem);
	// APPEND CHILD
	todoBox.appendChild(element);
	itemsLeft.innerHTML = todoBox.children.length;
 }




// DARK AND LIGHT THEMES
const theme = document.documentElement;

	theme.classList.add("light");

// Moon & Sun Icons
const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");

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


 