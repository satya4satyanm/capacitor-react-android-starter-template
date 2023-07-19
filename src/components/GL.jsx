import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import { Clipboard } from '@capacitor/clipboard';
import '../styles.scss'

function GL() {
  console.log(typeof localStorage.getItem("todos"));

  const [task, setTask] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  function handleChange(event) {
    let val = event.target.value;
    if(val === '111') {
      val = 'aloo,gobi,paneer,onion,green onion,capsicom,tomato,carrot,coriander,chilli,ginger';
    }
    setTask({name:val,checked:false});
  }

  function removeEmpty(arr) {
    const names = arr.map(({ name }) => name);
    const filtered = arr.filter(({ name }, index) => !names.includes(name, index + 1));

    let uniqueArr = filtered.filter((item) => {
        return item.name.trim().length > 0;
      });
    return uniqueArr;
  }

  function addTask() {
    let tasks = Array.isArray(task.name.split(",")) ? task.name.split(",").map((it, i)=>{
      return {name: it, checked: false};
    }) : [{name:task, checked:false}];


    setItems((prevValues) => {
      let d = [...tasks, ...prevValues];
      d = removeEmpty(d);
      return d;
    });
    setTask("");
  }

  function checkItem(id) {
    setItems((prevValues) => {
      // return prevValues.filter((item, index) => {
      //   return index !== id;
      // }); // this was removing an item on tick
      return prevValues.map((item, index) => {
        if(index === id) {
          item.checked = !item.checked;
        }
        return item;
      });
    });
  }

  function removeItem(id) {
    setItems((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const copyItems = async () => {
    await Clipboard.write({
      string: items.map((item)=>item.name).join(",")
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1 onClick={copyItems}>Grocery List</h1>
      </div>
      <div className="form">
        <input
          name="taskInput"
          type="text"
          onChange={handleChange}
          value={task.name || ''}
        />
        <button onClick={addTask}>
          <span>ADD</span>
        </button>
      </div>
      <div className="data">
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={checkItem}
              onRemove={removeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GL;
