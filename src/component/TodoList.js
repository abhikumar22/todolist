import React,{useState,useEffect} from 'react';
import * as actions from '../store/todo'
import { useSelector,
  // , useDispatch
  shallowEqual,
 } from "react-redux";


const Todo = () => {
  // whole store
  // const todoList = useSelector(state => state)

  //only seperate entity from store
  const todoList= useSelector(state => state.entities.todo,shallowEqual)

  
  // const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("********changes in Todo*************")
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addInputValue();
  }

  const addInputValue = () => {
    if (inputValue.length !== 0) {
      actions.todoAdded(inputValue)
      setInputValue('')
    }
  }

  const deleteATodoFromList = (id) => {
    actions.todoRemoved(id)
  }

  const resetTodo = () => {
    actions.deleteAllTodo()
  }
  return (


    <div className="container-fluid bg-primary text-center py-4 text-white">
      <div className="btn-group">
        <form className="row" onSubmit={handleSubmit}>
          <button
            className="btn btn-warning d-inline-block"
            type="button"
            onClick={() => {
              resetTodo();
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
              setInputValue(e.target.value)
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

        {todoList.map((item, index) => {
          return (
            <div
              className="bg-warning py-3 text-center my-1 justify-content-center "
              key={item.id}
            >
              <p className=" d-inline-block">
                {index + 1}. {item.description}
              </p>
              <button
                className="btn btn-danger ml-3 d-inline-block"
                onClick={() => {
                  deleteATodoFromList(item.id)

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

export default React.memo(Todo) ;