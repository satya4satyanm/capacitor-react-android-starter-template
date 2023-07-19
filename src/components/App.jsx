import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { Clipboard } from '@capacitor/clipboard';
import '../styles.scss'

function App(props) {
  // console.log(typeof localStorage.getItem("todos"));

  const [task, setTask] = useState("");
  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(items));
  // }, [items]);

  function handleChange(event) {
    let val = event.target.value;
    if (val === '111') {
      val = 'aloo,gobi,paneer,onion,green onion,capsicom,tomato,carrot,coriander,chilli,ginger';
    }
    setTask({ name: val, checked: false });
  }

  function removeEmpty(arr) {
    const names = arr.map(({ name }) => name);
    const filtered = arr.filter(({ name }, index) => !names.includes(name, index + 1));

    let uniqueArr = filtered.filter((item) => {
      return item.name?.trim().length > 0;
    });
    return uniqueArr;
  }

  function addTask() {
    let tasks = task.name?.length && task.name.indexOf(',') > -1 ? task.name.split(",") : [task.name];

    tasks = tasks.map((it, i) => {
      return { name: it, checked: false };
    });



    // setItems((prevValues) => {
    //   let d = [...tasks, ...prevValues];
    //   d = removeEmpty(d);
    //   return d;
    // });

    let d = [...tasks, ...props.grp.items];
    d = removeEmpty(d);
    props.updateGrpWithListItems(props.grp, d);

    setTask("");
  }

  function checkItem(id) {
    // setItems((prevValues) => {
    //   // return prevValues.filter((item, index) => {
    //   //   return index !== id;
    //   // }); // this was removing an item on tick
    //   return prevValues.map((item, index) => {
    //     if (index === id) {
    //       item.checked = !item.checked;
    //     }
    //     return item;
    //   });
    // });

    const tl = props.grp.items.map((item, index) => {
      if (index === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    props.updateGrpWithListItems(props.grp, tl);
  }

  function removeItem(id) {
    // setItems((prevValues) => {
    //   return prevValues.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
    const tl = props.grp.items.filter((item, index) => {
      return index !== id;
    });
    props.updateGrpWithListItems(props.grp, tl);
  }

  const copyItems = async () => {
    await Clipboard.write({
      string: props.grp.items.map((item) => item.name).join(",")
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>{props.grp.name}</h1>
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
          {props.grp.items.map((item, index) => (
            <div key={index}>
              {/* {JSON.stringify(item)} */}
              <ToDoItem

                id={index}
                text={item}
                onChecked={checkItem}
                onRemove={removeItem}
              /></div>
          ))}
        </ul>
      </div>
      <div className="btn-grp">
        <button onClick={copyItems}>
          <span>Copy List</span>
        </button>
        <button onClick={props.close}>
          <span>Close</span>
        </button>
      </div>
    </div>
  );
}

export default App;
