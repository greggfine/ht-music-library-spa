import React from "react";

const Types = ({ categories, currentMainCategory, currentSubcategory }) => {
  const currentMainCategoryObj = categories.find(category => {
    return category.mainCategoryName === currentMainCategory;
  });
  const currentSubcategoryObj = currentMainCategoryObj.subcategories.find(
    subcategory => subcategory.subcategoryName === currentSubcategory
  );
  const typesList = currentSubcategoryObj.subcategoryTypes.map((type, idx) => {
    return <li key={idx}>{type}</li>;
  });

  return <div>{typesList}</div>;
};

export default Types;
