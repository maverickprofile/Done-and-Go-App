let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    if (inp.value.trim() !== "") { // Prevent adding empty tasks
        let item = document.createElement("li");
        item.innerText = inp.value;

        let delBtn = document.createElement("button");
        delBtn.innerText = "DELETE";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";
    }
});

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) { // Check if clicked element is delete button
        let item = event.target.parentElement; // Get the parent <li>
        item.remove();
        console.log("Task Deleted");
    }
});
