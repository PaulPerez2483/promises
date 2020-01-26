// notes on 1/23/2020
const root = document.getElementById("root");
const employees = [
	{ id: 1, name: "moe" },
	{ id: 2, name: "larry" },
	{ id: 4, name: "shep" },
	{ id: 3, name: "curly" },
	{ id: 5, name: "groucho" },
	{ id: 6, name: "harpo" },
	{ id: 8, name: "shep Jr." },
	{ id: 99, name: "lucy" }
];

const render = (data) => {
	let html = data
		.map((employee) => {
			return `<div data-idx = ${employee.id}>${employee.name}</div>`;
		})
		.join("");
	root.innerHTML = html;
};

render(employees);

let fave = [...document.querySelectorAll("#root > div")];
fave.forEach((item) => {
	item.addEventListener("click", (ev) => {
		ev.target.classList.toggle("light");
	});
});
