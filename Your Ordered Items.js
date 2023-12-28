let orderedItemsContainer = document.getElementById("orderedItemsContainer");
let listConatinerEl = document.getElementById("listId");
let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

function deleteItem(itemId) {
    let listConatiner = document.getElementById("itemId");
    listConatinerEl.removeChild(listConatiner);
}

let headingEl = document.createElement("h1");
headingEl.textContent = "Your Orderd Item";
headingEl.classList.add("heading")
orderedItemsContainer.appendChild(headingEl);

function onTodo(todo) {
    let itemId = "item" + todo.uniqueNo;
    let buttonId = "button" + todo.uniqueNo;

    let listConatiner = document.createElement("li");
    listConatiner.classList.add("d-flex", "flex-row");
    listConatiner.id = itemId;
    listConatiner.textContent = todo.itemName;
    listConatinerEl.appendChild(listConatiner);



    let cancelEl = document.createElement("button");
    cancelEl.id = buttonId;
    cancelEl.textContent = "Cancel";
    cancelEl.classList.add("btn", "btn-danger", "button");
    cancelEl.onclick = function() {
        deleteItem(itemId);
    }
    listConatiner.appendChild(cancelEl);
}

for (let todo of itemList) {
    onTodo(todo);
}