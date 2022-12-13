import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  // console.log(item); // { id: 1, title: 'todo1', done: false, }
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);

  // readOnly: true - 수정 불가능
  // readOnly: false - 수정 가능
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteBtnClick = () => {
    deleteItem(todoItem);
  };

  // title input 커서가 깜빡인다고 수정이 가능한 것은 아님
  // 사용자가 키보드 입력할 때마다 todoItem의 title을 새 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // title input 클릭 시 readOnly 상태 변경: true -> false
  const onTitleClick = () => {
    setReadOnly(false);
  };

  // title input에서 enter 누를 시 readOnly 상태 변경: false -> true
  const onTitleKeyPress = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // checkbox 체크시: todoitem의 done 값이 true
  // checkbox 체크해제시: todoitem의 done 값이 false
  const onCheckboxChange = () => {
    todoItem.done = !todoItem.done;
    setTodoItem(todoItem);
  };

  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${id}`}
        name={`todo${id}`}
        value={`todo${id}`}
        defaultChecked={done}
        onChange={onCheckboxChange}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        onChange={editEventHandler}
        onClick={onTitleClick}
        onKeyPress={onTitleKeyPress}
        readOnly={readOnly}
      />
      <button onClick={onDeleteBtnClick}>DELETE</button>
    </div>
  );
};

export default Todo;
