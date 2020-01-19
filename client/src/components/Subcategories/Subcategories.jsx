import React, { useContext } from "react";
import Subcategory from "../Subcategory/Subcategory";
import "./Subcategories.styles.scss";
import { CategoriesCtx } from "../CategoriesProvider";

const Subcategories = ({
  currentMainCategory,
  handleSetCurrentSubcategory
}) => {
  const categoriesCtx = useContext(CategoriesCtx);
  const subcategoryList = categoriesCtx.categories.map(category => {
    if (category.mainCategoryName === currentMainCategory) {
      return category.subcategories.map((subcategory, idx) => (
        <Subcategory
          key={idx}
          subcategoryName={subcategory.subcategoryName}
          currentMainCategory={currentMainCategory}
          handleSetCurrentSubcategory={handleSetCurrentSubcategory}
        />
      ));
    }
  });
  return <ul className="Subcategories">{subcategoryList}</ul>;
};

export default Subcategories;
