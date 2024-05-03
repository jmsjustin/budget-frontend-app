import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { CategoriesIndex } from "./CategoriesIndex";
import { CategoriesNew } from "./CategoriesNew";
import { CategoriesShow } from "./CategoriesShow";
import { Modal } from "./Modal";

export function Content() {
  const [categories, setCategories] = useState([]);
  const [isCategoriesShowVisible, setIsCategoriesShowVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({});

  const handleIndexCategories = () => {
    console.log("handleIndexCategories");
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  const handleCreateCategory = (params, successCallback) => {
    console.log("handleCreateCategory", params);
    axios.post("http://localhost:3000/categories.json", params).then((response) => {
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
  };

  useEffect(handleIndexCategories, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <CategoriesNew onCreateCategory={handleCreateCategory} />
      <CategoriesIndex categories={categories} onShowCategory={handleShowCategory} />
      <Modal show={isCategoriesShowVisible} onClose={handleClose}>
        <CategoriesShow category={currentCategory} />
      </Modal>
    </div>
  );
}
