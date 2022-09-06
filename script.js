const body = document.querySelector("body");
const container = document.querySelector(".container");
const form = document.getElementById('form');
const todoInput = document.querySelector(".todo-input");
const inputText = document.getElementById('input-text');
const todoBoxList = document.querySelector(".todo-box-list");
const todoBoxItem = document.getElementsByClassName(".todo-box-item");
const actionBar = document.querySelector(".action-bar");
const todoText = document.querySelector(".todo-text");
const todoBox = document.querySelector(".todo-box");

const itemsLeft = document.querySelector(".items-left-total");
const clearBtn = document.querySelector(".clear");
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");

const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");
const bgGroundColor = document.querySelector(".bgroundcolor");

const bgroundImageDark = document.querySelector(".bgroundimage-dark");


const bgroundImageLight = document.querySelector(".bgroundimage-light");

window.addEventListener("DOMContentLoaded", setupItems);

let counter = 0;
form.addEventListener("submit", function(e){
	e.preventDefault();
	addItem();
	

});
function clear() {
	clearBtn.addEventListener("click", function() {
console.log("clicked");
// todoBoxList.style.display = "none";
removeFromLocalStorage();
counter--;
itemsLeft.innerHTML = counter;
	})
}
function all() {
	allBtn.addEventListener("click", function(){
		
		
		
	})
}
all();



function addItem() {
	
	const value = inputText.value;

	const id = new Date().getTime().toString();

	


	if(value !== ""){
const displayTodos = function(value) {
	
todoBox.innerHTML = "";
		value.forEach(function(value, i){
			const html = `<div class="circle2"></div>
            <p class="todo-text">${value}</p>

            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross">
          </div>`;
          // todoBoxList.insertAdjacentHTML('afterbegin', html);
          todoBoxList.appendChild(html);
		});
};
		
		// const element = document.createElement("article");
		
		// let attr = document.createAttribute("data-id");
		// attr.value = id;
		// element.setAttributeNode(attr);
		// element.classList.add("todo-box-item");
		// element.innerHTML = `
  //           <div class="circle2"></div>
  //           <p class="todo-text">${value}</p>
  //           <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross">
  //         </div>`

  // element.innerHTML = `
  //           <li>${value}</li>
  //           `

          // element.innerHTML = `
            
          //   <p class="todo-text">${value}</p>
          //   `

          // todoBoxList.appendChild(element);
          // todoBox.classList.add("show-container");
          counter++;
          itemsLeft.innerHTML = counter;
          addToLocalStorage(id, value);


}

	

	inputText.value = "";



	
	}


	
	



// LOCAL STORAGE

function addToLocalStorage(id, value) {
	const todoInput = {id, value};
	let items = getLocalStorage();
	items.push(todoInput);
	localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
	return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function removeFromLocalStorage(id) {
	let items = getLocalStorage();

	items = items.filter(function (item) {
		if(item.id !== id) {
			return item;
		}
	});
	localStorage.setItem("list", JSON.stringify(items));
}
// SETUP ITEMS

function setupItems() {
	let items = getLocalStorage();

	if(items.length > 0) {
		items.forEach(function (item) {
			createListItem(item.id, item.value);
		});
		// container.classList.add("show-container")
	}


}
function createListItem(id, value) {
	const displayTodos = function(value) {
	
// todoBoxList.innerHTML = "";
		value.forEach(function(value, i){
			const html = `
			<div class="todo-box-list flex">
            <input type="checkbox" class="check-input check-todo--box">
            <p class="todo-text">{value}</p>

            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross">
          </div>
          `;
          // todoBoxList.insertAdjacentHTML('afterbegin', html)
          
console.log(html)
          todoBox.appendChild(html);

		});
};
	
	// const element = document.createElement("article");
	
	// 	let attr = document.createAttribute("data-id");
	// 	attr.value = id;
	// 	element.setAttributeNode(attr);
	// 	element.classList.add("todo-box-item");
	// 	element.innerHTML = `
 //            <div class="circle2"></div>
 //            <p class="todo-text">${value}</p>
 //            <img src="images/icon-cross.svg" alt="cross icon" class="icon-cross">
 //          </div>`;

  

 //          todoBoxList.appendChild(element);
          // todoBox.classList.add("show-container");
          counter++;
          itemsLeft.innerHTML = counter;
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
const todoText = document.querySelector(".todo-text");
const circle2 = document.querySelector(".check-todo--box");
circle2.addEventListener("click", function(){
	circle2.classList.toggle("completed");
		todoText.classList.toggle("complete");
})	
	

	


	
	

  }   


clear();


// LIGHT AND DARK SETTING
