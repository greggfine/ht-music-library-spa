import React, { useState, useEffect, createContext } from "react";

export const CategoriesCtx = createContext();

export const CategoriesProvider = props => {
  const [categories, setCategories] = useState([]);
  const [currentSubcategory, setCurrentSubcategory] = useState("jazz");

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await fetch("/categories");
      const categoriesJSON = await categories.json();
      setCategories(categoriesJSON);
    };
    fetchCategories();
  }, []);
  return (
    <CategoriesCtx.Provider
      value={{ categories, currentSubcategory, setCurrentSubcategory }}
    >
      {props.children}
    </CategoriesCtx.Provider>
  );
};
export default CategoriesProvider;
