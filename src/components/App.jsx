import React, { useState } from "react";

function App() {
  const [listItem, setList] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const itemName = event.target.value;
    setList(itemName);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, listItem];
    });

    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" input={listItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
