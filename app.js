let todo = [];
let request = prompt("Enter the request: [list, add, delete, quit]");

while(true){
    if(request == "quit"){
        console.log("You quit the app");
        break;
    }else if(request == "list"){
        console.log("------------------");
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("------------------");
    }else if(request == "add"){
        let task = prompt("Enter the task to the list");
        todo.push(task);
        console.log("Task added to the list");
    }else if(request == "delete"){
        let index = prompt("Enter the index to delete the task");
        todo.splice(index, 1);
        console.log("Task deleted from the list");
    }else{
        console.log("Invalid request");
    }
    request = prompt("Enter the request: [list, add, delete, quit]");
}