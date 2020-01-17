import React, { useState, useEffect } from "react";
import Subcategories from "../Subcategories/Subcategories";
import "./MainCategories.styles.scss";
import TracksHOC from "../TracksHOC";
import FilterList from "../FilterList/FilterList";

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

  const handleSetMainCategory = category => {
    setMainCategory(category.mainCategoryName);
  };

  const mainCategoryList = categories.map((category, idx) => (
    <li
      key={idx}
      onClick={() => handleSetMainCategory(category)}
      style={
        category.mainCategoryName === mainCategory
          ? { backgroundColor: "rgb(218, 210, 186)" }
          : { backgroundColor: "" }
      }
    >
      <p>{category.mainCategoryName}</p>
      <p className={`${category.icon} icon`}></p>
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
      <FilterList currentSubcategory={currentSubcategory} />
      <TracksHOC currentSubcategory={currentSubcategory} />
    </>
  );
};

export default MainCategories;
