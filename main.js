const crbtn = document.querySelector("#crbtn");
const container = document.querySelector("#container");
const x = document.querySelector("#x");
const y = document.querySelector("#y");

for (let i = 1; i < 16; i++){
	for (let j = 1; j < 16; j++){
		const
	}
	const box = document.createElement("div");
	box.setAttribute("class", "box");
	container.appendChild(box);
}

container.addEventListener("mouseover", function(event) {
	if (event.target.id == !"container"){
	event.target.style.backgroundColor = "black";
	}
});

function newGrid() {
	while (container.firstChild){
		container.removeChild(container.lastChild);
	};
	
	for (let i = 1; i < x.value; i++){
		let row = document.createElement("section");
		for (let j = 1; j < y.value; j++){
		const box = document.createElement("div");
		box.setAttribute("class", "box");
		row.appendChild(box);
		};
	};
};

crbtn.addEventListener("click", newGrid);
