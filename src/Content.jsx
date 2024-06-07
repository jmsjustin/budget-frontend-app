import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
// import { LogoutLink } from "./LogoutLink";
import { CategoriesIndex } from "./CategoriesIndex";
import { CategoriesNew } from "./CategoriesNew";
import { CategoriesShow } from "./CategoriesShow";
// import { ExpensesShow } from "./ExpensesShow";
// import { ExpensesIndex } from "./ExpensesIndex";
import { Modal } from "./Modal";

export function Content() {
  const [categories, setCategories] = useState([]);
  const [isCategoriesShowVisible, setIsCategoriesShowVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});
  // const [isExpensesShowVisible, setIsExpensesShowVisible] = useState(false);
  // const [currentExpense, setCurrentExpense] = useState({});

  const [expenses, setExpenses] = useState([]);

  const handleIndexExpenses = () => {
    console.log("handleIndexExpenses");
    axios.get("/expenses.json").then((response) => {
      console.log(response.data);
      setExpenses(response.data);
    });
  };

  const handleCreateExpense = (params, successCallback) => {
    console.log("handleCreateExpense", params);
    axios.post("/expenses.json", params).then((response) => {
      setExpenses([...expenses, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexExpenses, []);

  const handleIndexCategories = () => {
    console.log("handleIndexCategories");
    axios.get("/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  const handleCreateCategory = (params, successCallback) => {
    console.log("handleCreateCategory", params);
    axios.post("/categories.json", params).then((response) => {
      setCategories([...categories, response.data]);
      successCallback();
    });
  };

  const handleShowCategory = (category) => {
    console.log("handleShowCategory", category);
    setIsCategoriesShowVisible(true);
    setCurrentCategory(category);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCategoriesShowVisible(false);
    // setIsExpensesShowVisible(false);
  };

  // const handleShowExpense = (expense) => {
  //   console.log("handleShowExpense", expense);
  //   setIsExpensesShowVisible(true);
  //   setCurrentExpense(expense);
  // };

  // const handleClose = () => {
  //   console.log("handleClose");
  //   setIsExpensesShowVisible(false);
  // };

  useEffect(handleIndexCategories, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <LogoutLink /> */}
      <CategoriesIndex categories={categories} onShowCategory={handleShowCategory} />
      {/* <ExpensesNew onCreateExpense={handleCreateExpense} /> */}
      <CategoriesNew onCreateCategory={handleCreateCategory} />
      <Modal show={isCategoriesShowVisible} onClose={handleClose}>
        <CategoriesShow category={currentCategory} onCreateExpense={handleCreateExpense} />
        {/* <ExpensesShow expense={currentExpense} /> */}
      </Modal>
    </div>
  );
}
