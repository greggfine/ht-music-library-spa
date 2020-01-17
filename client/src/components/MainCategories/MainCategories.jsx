import React, { useState, useEffect } from "react";
import Subcategories from "../Subcategories/Subcategories";
import "./MainCategories.styles.scss";
import TracksHOC from "../TracksHOC";

const MainCategories = () => {
  const [categories, setCategories] = useState([]);
  const [currentSubcategory, setCurrentSubcategory] = useState("jazz");
  const [mainCategory, setMainCategory] = useState("genre");

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await fetch("/categories");
      const categoriesJSON = await categories.json();
      setCategories(categoriesJSON);
    };
    fetchCategories();
  }, []);

  const handleSetCurrentSubcategory = currSubCat => {
    setCurrentSubcategory(currSubCat);
  };

  const mainCategoryList = categories.map((category, idx) => (
    <li key={idx} onClick={() => setMainCategory(category.mainCategoryName)}>
      <p>{category.mainCategoryName}</p>
      <p className={`${category.icon}`}></p>
    </li>
  ));
  return (
    <>
      <ul className="MainCategories">{mainCategoryList}</ul>
      <Subcategories
        currentMainCategory={mainCategory}
        categories={categories}
        handleSetCurrentSubcategory={handleSetCurrentSubcategory}
      />
      <TracksHOC currentSubcategory={currentSubcategory} />
    </>
  );
};

export default MainCategories;