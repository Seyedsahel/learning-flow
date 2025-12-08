let todos = JSON.parse(localStorage.getItem('todos')) ||  [];
showTodo(todos);
document.querySelector('.js-addTodo').addEventListener('click',()=>{
   let todoElm = document.querySelector('.js-text');
   let todo = todoElm.value;
   if (todo !== ''){
    todos.push({
        name: todo,
        done: false,
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo(todos);
    todoElm.value = '';
   }

})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        let todoElm = document.querySelector('.js-text');
        let todo = todoElm.value;
        if (todo !== ''){
    todos.push({
        name: todo,
        done: false,
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo(todos);
    todoElm.value = '';
   }

    }
});

function showTodo(todos){
    let todoDiv = document.querySelector('.js-todoItem');
    todoDiv.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].done);
         todoDiv.innerHTML +=
            `<div data-id="${i}" class="js-todoContext flex flex-row mb-5">
                <div class="flex-grow flex flex-row gap-3 mx-3">
                    <div onclick="markAsDone(${i})" class="js-doneButton w-8 h-8 border-2 border-gray-400 rounded-full">
                        ${todos[i].done ? `<img src="assets/checkmark.png">` : ""}
                    </div>
                    <div class="js-todoText mt-1 ${todos[i].done ? 'line-through' : ""}">
                        ${todos[i].name}
                    </div>
                </div>
                <div onclick="deleteTodo(${i})" class="js-delete w-5 mx-5">
                    <img class="" src="assets/xmark.png" alt="">
                </div>
            </div>`
    }
   
}

function markAsDone(id){
    if(!todos[id].done){
        todos[id].done = true;
        localStorage.setItem('todos', JSON.stringify(todos));
        showTodo(todos);
        console.log(value.done,'if');
    }else{
        todos[id].done = false;
        localStorage.setItem('todos', JSON.stringify(todos));
        showTodo(todos);    
        console.log(value.done,'else');

    }
}

function deleteTodo(id){  
    todos.splice(id,1);
    localStorage.setItem('todos', JSON.stringify(todos));
    showTodo(todos);
}
