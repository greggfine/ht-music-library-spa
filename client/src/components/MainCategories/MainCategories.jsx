import React, { useState, useContext } from "react";
import Subcategories from "../Subcategories/Subcategories";
import "./MainCategories.styles.scss";
import TracksHOC from "../TracksHOC";
import FilterList from "../FilterList/FilterList";
import { CategoriesCtx } from "../CategoriesProvider";

const MainCategories = () => {
  const [mainCategory, setMainCategory] = useState("genre");
  const categoriesCtx = useContext(CategoriesCtx);

  const handleSetCurrentSubcategory = currSubCat => {
    categoriesCtx.setCurrentSubcategory(currSubCat);
  };

  const handleSetMainCategory = category => {
    setMainCategory(category.mainCategoryName);
  };

  const mainCategoryList = categoriesCtx.categories.map((category, idx) => (
    <li
      key={idx}
      onClick={() => handleSetMainCategory(category)}
      style={{
        backgroundColor:
          category.mainCategoryName === mainCategory ? "rgb(218, 210, 186)" : ""
      }}
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
        handleSetCurrentSubcategory={handleSetCurrentSubcategory}
      />
      <FilterList />
      <TracksHOC />
    </>
  );
};

export default MainCategories;
