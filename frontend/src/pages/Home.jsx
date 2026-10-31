import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";

const Home = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [flag, setFlag] = useState(false);

  async function getAll() {
    try {
      const todoList = await axios.get("http://localhost:9000/getAll");
      console.log(todoList.data.data);
      setTodo(todoList.data.data);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo() {
    try {
      const data = {
        title: input,
      };
      setFlag(false);
      const todo = await axios.post("http://localhost:9000/create", data);
      console.log(todo.data.data);
      setFlag(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAll();
  }, [flag]);

  return (
    <div>
      <Header />
      <div className="text-center">
        <input
        className="border border-1 rounded bg-gray-200 rounded p-2 me-2 w-64 mt-2"
        type="text"
        placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border border-1 rounded bg-green-400 text-white rounded p-2"
        onClick={addTodo}
      >
        Add
      </button>
      </div>
      <MainSection  todo= {todo} getAll={getAll}/>
      <Footer />
    </div>
  );
};

export default Home;
