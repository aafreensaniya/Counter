import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "../Components/Counter";
import Api from "./Api";
import { Home } from "./Home";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Turnary from "./Turnary";
import CalssComponent from "./CalssComponent";
import ClassTodo from "./ClassTodo";

const App2 = () => {
  return (
    <React.Fragment>
      {/* <Api/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/api" element={<Api />} />
          <Route path="/turnary" element={<Turnary />} />
          <Route path="/calssComponent" element={<CalssComponent />} />
          <Route path="/calssTodo" element={<ClassTodo />} />
        </Routes>
      </BrowserRouter> 
    </React.Fragment>
  );
};

export default App2;
