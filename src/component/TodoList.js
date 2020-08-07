import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(""); // handling input value
  const [lst, setLst] = useState([]);  // handling list of todos

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addInputValue();
  }

  const addInputValue = () => {
    if (inputValue.length !== 0) {
      var temp = [...lst];
      const newVal = {
        id: Date.now(),
        value: inputValue
      };
      temp.push(newVal);
      setInputValue("");
      setLst(temp)
    }
  }

  return (
    <div className="container-fluid bg-primary text-center py-4 text-white">
      <div className="btn-group">
        <form className="row" onSubmit={handleSubmit}>
          <button
            className="btn btn-warning d-inline-block"
            type="button"
            onClick={() => {
              setLst([]);
            }}
          >
            Reset
            </button>
          <input
            className="ml-2 d-inline-block "
            type="text"
            name="name"
            required
            autoComplete='off'
            value={inputValue}
            placeholder="Enter todo event"
            onChange={e => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="ml-2 btn btn-success d-inline-block"
            type="button"
            onClick={() => {
              addInputValue();
            }}
          >
            Add
            </button>
        </form>
      </div>
      <br />
      <br />
      <br />

      <div className="">
        {lst.map((item, index) => {
          return (
            <div
              className="bg-warning py-3 text-center my-1 justify-content-center "
              key={item.id}
            >
              <p className=" d-inline-block">
                {index + 1}. {item.value}
              </p>
              <button
                className="btn btn-danger ml-3 d-inline-block"
                onClick={() => {
                  const list = [...lst];
                  const updatedList = list.filter(value => value.id !== item.id);
                  setLst(updatedList);
                }}
              >
                delete
                  </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;