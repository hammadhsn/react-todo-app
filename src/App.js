import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import Search from "./components/Search";
import ModalOpen from "./components/ModalOpen";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const [searchData, setSearchData] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sure, setSure] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");

    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item updated");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  
const clearItems = () => {
    if(sure){
    showAlert(true, "danger", "empty list");
    setList([]);
    setModalIsOpen(false);
    }
    else{
      setModalIsOpen(false);
    }

  };

  



  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const inputChangeHandler = (event) => {
    const data = event.target.value;
    setSearchData(data);
    setSearchTerm(data);
    event.preventDefault();
  };

  return (
    <>
      <h2 className="text-top">LOGICON</h2>

      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>Todo List</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Input your Todo List"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "Submit!"}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="grocery-container">
            <Search click={inputChangeHandler} value={searchData}/>

            <List
              items={list}
              removeItem={removeItem}
              editItem={editItem}
              searchTerm={searchTerm}     //searchTerm as a value passing to child comp -> (list)
            />
            
            <button className="clear-btn" onClick={() => setModalIsOpen(true)}>
              clear items
            </button>
          </div>
        )}
      </section>
      <ModalOpen
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              sure={sure}
              setSure={setSure}
              clearItems={clearItems}
              /> 
    </>
  );
}

export default App;
