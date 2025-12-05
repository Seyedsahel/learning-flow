document.querySelector('.js-addTodo').addEventListener('click',()=>{
   let todoElm = document.querySelector('.js-text');
   let todo = todoElm.value;
   if (todo!== ''){
    addTodo(todo);
    todoElm.value = '';
   }

})

document.body.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        let todoElm = document.querySelector('.js-text');
        let todo = todoElm.value;
        if (todo!== ''){
            addTodo(todo);
            todoElm.value = '';
        }
    }
});
let id = 10;
function addTodo(todo){
    id = id+1;
    document.querySelector('.js-todoItem').innerHTML +=
    `<div class="flex flex-row mb-5">
         <div class="js-todoContext flex-grow flex flex-row gap-3 mx-3">
            <div data-id="${id}" onclick="markAsDone(${id})" class="js-doneButton w-8 h-8 border-2 border-gray-400 rounded-full">
            </div>
            <div class="mt-1">
                ${todo}
            </div>
        </div>
        <div class="w-5 mx-5">
            <img class="" src="assets/xmark.png" alt="">
        </div>
      </div>`
}

function markAsDone(id){
    document.querySelectorAll('.js-doneButton')
        .forEach((value) => {
            if(Number(value.dataset.id)===id){
                if(value.innerHTML === ""){
                    value.innerHTML =
                        `<img class="" src="assets/checkmark.png" alt="">`;
                }else{
                    value.innerHTML = "";
                }
                
            }

        })
   
}

