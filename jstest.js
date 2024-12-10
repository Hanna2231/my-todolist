const inputElement = document.getElementById('todo-input');
const buttonElement = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todoCount = 0;  // 할 일 개수 추적

buttonElement.addEventListener('click', function() {
  const todoText = inputElement.value.trim();

  // 입력값이 없거나 2글자 미만일 경우 경고
  if (!todoText || todoText.length < 2) {
    alert('할 일은 2글자 이상 입력해주세요!');
  } else if (todoCount >= 5) {  // 최대 5개까지 할 일 추가
    alert('최대 5개까지 할 일을 추가할 수 있습니다.');
  } else {
    // 할 일을 화면에 추가
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoTextElement = document.createElement('h4');
    todoTextElement.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    
    // 삭제 버튼 클릭 시 실행할 함수
    deleteButton.addEventListener('click', function() {
      todoItem.remove();
      todoCount--;  // 할 일 삭제 시 카운트 감소
      alert('할 일이 완료되었습니다');  // 삭제 후 알림 표시
    });

    // 할 일과 삭제 버튼을 todoItem에 추가
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    // 할 일이 추가될 때마다 카운트 증가
    todoCount++;

    // 입력란 비우기
    inputElement.value = '';
  }
});

