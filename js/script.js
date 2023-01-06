// Adding todo when clicking on the plus
// The appearance of a tick when clicking on the squares

const wordInputNode = document.querySelector('.word__input');
const wordBtnNode = document.querySelector('#button-add');
const todoBoxNode = document.querySelector('.todo__box');
let todoList = [];

wordBtnNode.addEventListener('click', function () {
     event.preventDefault();
     if (wordInputNode.value == '') {
          alert('Введите задачу на день в поле ввода');
     } else {
          let newTodo = {
               todo: wordInputNode.value,
               important: false
          };
          todoList.push(newTodo);
          displayMessages();
     }
     
});

function displayMessages() {
     let todoBoxinnerblock = '';
     todoList.forEach(function (item) {
          todoBoxinnerblock += `
          <div class="todo__box--item">
               <button class="successfully">
                    
               </button> 
          <p class="todo__box--text">
               ${item.todo}
          </p>
          </div>`;
          todoBoxNode.innerHTML = todoBoxinnerblock;
     });
     const deleteBtn = document.querySelector('.todo-clear');
     deleteBtn.addEventListener('click', function () {
          todoList = [];
          todoBoxNode.innerHTML = '';
     })
};


// const successfullyBtnNode = document.querySelector('.successfully');
// successfullyBtnNode.addEventListener('click', function () {
//      successfullyBtnNode.innerHTML = `<i class="fa-solid fa-check ic-sett"></i>`;
// });


