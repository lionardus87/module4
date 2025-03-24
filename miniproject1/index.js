const todos = [
	// { id: 1, title: "Title1", desc: "desc", createdAt: "2025-3-19" },
	// { id: 2, title: "Title2", desc: "desc", createdAt: "2025-3-19" },
	// { id: 3, title: "Title3", desc: "desc", createdAt: "2025-3-19" },
];

const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
let editId = null;

function modalClick(id = null) {
	if (id !== null) {
		const todo = todos.find((to) => to.id == id);
		document.getElementById("formTitle").value = todo.title;
		document.getElementById("fromDesc").value = todo.desc;
		editId = id;
	} else {
		document.getElementById("formTitle").value = "";
		document.getElementById("fromDesc").value = "";
		editId = null;
	}

	myModal.toggle();
}

function modalSave() {
	const title = document.getElementById("formTitle").value;
	const desc = document.getElementById("fromDesc").value;
	if (!title & !desc) {
		alert("All fields are required");
		return;
	}
	if (!title) {
		alert("Title's field is required");
		return;
	}
	if (!desc) {
		alert("Description's field is required");
		return;
	}
	if (editId !== null) {
		// Update existing task
		const index = todos.findIndex((todo) => todo.id === editId);
		todos[index].title = title;
		todos[index].desc = desc;
	} else {
		// Create new task
		const id =
			todos.length === 0 ? 1 : Math.max(...todos.map((to) => to.id)) + 1;
		const todo = {
			id,
			title,
			desc,
			createdAt: new Date().toLocaleString(),
			isCompleted: false,
			completedAt: null,
		};
		todos.push(todo);
	}

	myModal.hide();
	render();
}

// function updateAccordion() {
// 	document.getElementById("collapseOne").className =
// 		"accordion-collapse collapse show";
// }

function todoDel(id) {
	const targetId = todos.findIndex((todo) => todo.id == id);
	if (targetId != -1) {
		todos.splice(targetId, 1);
	}
	todos.forEach((todo, index) => {
		todo.id = index + 1;
	});
	render();
}

function todoComplete(id) {
	const targetId = todos.findIndex((todo) => todo.id == id);
	const targetTodo = { ...todos[targetId] };
	targetTodo.isCompleted = !targetTodo.isCompleted;
	targetTodo.completedAt = targetTodo.isCompleted
		? new Date().toLocaleString()
		: null;
	todos[targetId] = targetTodo;
	render();
}

function render() {
	document.getElementById("rowContainer").innerHTML = null;
	document.getElementById("completedContainer").innerHTML = null;
	todos.forEach((todo) => {
		if (todo) {
			const template = document
				.getElementById("rowTemplate")
				.content.cloneNode(true);
			template.getElementById("id").innerText = todo.id;
			template.getElementById("title").innerHTML = todo.isCompleted
				? `<del>${todo.title}</del>`
				: todo.title;
			template.getElementById("desc").innerHTML = todo.isCompleted
				? `<del>${todo.desc}</del>`
				: todo.desc;
			template.getElementById("createdAt").innerText = todo.isCompleted
				? todo.completedAt
				: todo.createdAt;

			template.getElementById("todoComplete").checked = todo.isCompleted;
			template
				.getElementById("todoComplete")
				.addEventListener("click", () => todoComplete(todo.id));

			template.getElementById("todoDel").addEventListener("click", () => {
				todoDel(todo.id);
			});

			template
				.querySelector("button")
				.addEventListener("click", () => modalClick(todo.id));

			// include the populated template into the page
			if (todo.isCompleted) {
				document.getElementById("completedContainer").appendChild(template);
			} else {
				document.getElementById("rowContainer").appendChild(template);
			}
		}
	});
}

render();
