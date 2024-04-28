import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { CategoriesIndex } from "./CategoriesIndex";

export function Content() {
  const [categories, setCategories] = useState([]);

  const handleIndexCategories = () => {
    console.log("handleIndexCategories");
    axios.get("localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  useEffect(handleIndexCategories, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <CategoriesIndex categories={categories} />
    </div>
  );
}
