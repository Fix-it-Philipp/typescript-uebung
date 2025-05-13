const div = document.querySelector(".container") as HTMLElement;
const data = document.querySelector("#data");

div.addEventListener("mouseover", () => div.style.backgroundColor = "black");
div.addEventListener("mouseout", () => div.style.backgroundColor = "red");
div.addEventListener("click", () => div.style.backgroundColor = changeColor());

function changeColor(): string{
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'aqua'];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
};

const obj = [{
    id: 1,
    name: "Ball",
    price: 25.5
}, {
    id: 2,
    name: "Boot",
    price: "3.5 Muscheln"
}];

obj.forEach(element => {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `ID: ${element.id}, Name: ${element.name}, Preis: ${element.price}`;
    data?.appendChild(paragraph);
})