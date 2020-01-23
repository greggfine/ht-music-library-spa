import React, { useState, useEffect, createContext } from "react";

export const CategoriesCtx = createContext();

export const CategoriesProvider = props => {
  const [categories, setCategories] = useState([]);
  //   const [currentSubcategory, setCurrentSubcategory] = useState("jazz")
  const [currentSubcategoryArr, setCurrentSubcategoryArr] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await fetch("/categories");
      const categoriesJSON = await categories.json();
      setCategories(categoriesJSON);
    };
    fetchCategories();
  }, []);

  //   console.log(currentSubcategoryArr);
  return (
    <CategoriesCtx.Provider
      //   value={{ categories, currentSubcategory, setCurrentSubcategory }}
      value={{ categories, currentSubcategoryArr, setCurrentSubcategoryArr }}
    >
      {props.children}
    </CategoriesCtx.Provider>
  );
};
export default CategoriesProvider;
