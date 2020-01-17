import React from "react";
import Subcategory from "../Subcategory/Subcategory";
import "./Subcategories.styles.scss";

const Subcategories = ({
  currentMainCategory,
  categories,
  handleSetCurrentSubcategory
}) => {
  const subcategoryList = categories.map(category => {
    if (category.mainCategoryName === currentMainCategory) {
      return category.subcategories.map((subcategory, idx) => (
        <Subcategory
          key={idx}
          subcategoryName={subcategory.subcategoryName}
          categories={categories}
          currentMainCategory={currentMainCategory}
          handleSetCurrentSubcategory={handleSetCurrentSubcategory}
        />
      ));
    }
  });
  return <ul className="Subcategories">{subcategoryList}</ul>;
};

export default Subcategories;
