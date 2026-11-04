const crbtn = document.querySelector("#crbtn");
const container = document.querySelector("#container");
const x = document.querySelector("#x");
const y = document.querySelector("#y");

for (let i = 1; i < 16; i++){
	let row = document.createElement("div");
	row.setAttribute("class", "row");
	container.appendChild(row);
	for (let j = 1; j < 16; j++){
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		row.appendChild(box);
	}
}

container.addEventListener("mouseover", function(event) {
	if (event.target.id == !"container"){
	event.target.style.backgroundColor = "black";
	event.target.style.opacity = "100%";
	}
});

function newGrid() {
	while (container.firstChild){
		container.removeChild(container.lastChild);
	};
	
	for (let i = 1; i < x.value; i++){
		let row = document.createElement("div");
		row.setAttribute("class", "row");
		container.appendChild(row);
		for (let j = 1; j < y.value; j++){
		let box = document.createElement("div");
		box.setAttribute("class", "box");
		row.appendChild(box);
		};
	};
};

crbtn.addEventListener("click", newGrid);
