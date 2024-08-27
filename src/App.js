import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [todo, settodo] = useState([]);
  console.log(todo, "todo");
  const [listData, setListData] = useState();
  const listHandler = (event) => {
    console.log(event.target.value);
    setListData(event.target.value);
  };
  const onSubmitHandler = () => {
    console.log("this is onsubmit");
    settodo([...todo, listData]);
  };
  const deleteHandler = (event) => {
    console.log(event, "delete");
    const removeItem = todo.filter((todo, index) => {
      //console.log(todo, "idd");
      // return the rest of the todos that don't match the item we are deleting
      return todo !== event;
    });
    settodo(removeItem);
    console.log(removeItem, "remove");
  };

  return (
    <div>
      <input placeholder="name" onChange={listHandler} />
      <button onClick={onSubmitHandler}>Submit</button>
      {todo.map((item, index) => {
        return (
          <div>
            {item} &nbsp;
            {index}
            <button onClick={() => deleteHandler(item)}>Delete Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
