// Adding todo when clicking on the plus
// The appearance of a tick when clicking on the squares

const wordInputNode = document.querySelector('.word__input');
const wordBtnNode = document.querySelector('#button-add');
const todoBoxNode = document.querySelector('.todo__box');
const deleteBtn = document.querySelector('.todo-clear');
const successfullyBtnNode = document.querySelector('.successfully');
let todoList = [];

{
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
               wordInputNode.value = '';
          };
     });

     function displayMessages() {
          let todoBoxinnerblock = '';
          todoList.forEach(function (item) {
               todoBoxinnerblock += `
               <div class="todo__box--item">
                    <label class="container">
                         <input type="checkbox" checked="checked" class="check-highload">
                         <span class="highload2"></span>
                    </label>
                    <p class="todo__box--text">
                      ${item.todo}
                    </p>
               </div>`;
               todoBoxNode.innerHTML = todoBoxinnerblock;
          });
     };

     deleteBtn.addEventListener('click', function () {
          todoList = [];
          todoBoxNode.innerHTML = '';
     });
}







