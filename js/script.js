// 

const wordInputNode = document.querySelector('.word__input');
const wordBtnNode = document.querySelector('#button-add');
const todoBoxNode = document.querySelector('.todo__box');
let todoList = [];

wordBtnNode.addEventListener('click', function () {
     event.preventDefault();
     let newTodo = {
          todo: wordInputNode.value,
          important: false
     };
     todoList.push(newTodo);
     displayMessages();
     
});

function displayMessages() {
     let todoBoxinnerblock = '';
     todoList.forEach(function (item) {
          todoBoxinnerblock += `
          <div class="todo__box--item">
               <div class="successfully">

               </div> <!--<i class="fa-solid fa-check ic-sett"></i>-->
          <p class="todo__box--text">
               ${item.todo}
          </p>
          </div>`;
          todoBoxNode.innerHTML = todoBoxinnerblock;
     });
};


