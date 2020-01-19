import React, { useContext } from "react";
import { CategoriesCtx } from "../CategoriesProvider";

const Types = ({ currentMainCategory }) => {
  const categoriesCtx = useContext(CategoriesCtx);

  const currentMainCategoryObj = categoriesCtx.categories.find(category => {
    return category.mainCategoryName === currentMainCategory;
  });
  const currentSubcategoryObj = currentMainCategoryObj.subcategories.find(
    subcategory =>
      subcategory.subcategoryName === categoriesCtx.currentSubcategory
  );
  const typesList = currentSubcategoryObj.subcategoryTypes.map((type, idx) => {
    return <li key={idx}>{type}</li>;
  });

  return <div>{typesList}</div>;
};

export default Types;
