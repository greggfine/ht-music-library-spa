import React, { useContext } from "react";
import { CategoriesCtx } from "../CategoriesProvider";

const FilterList = () => {
  const categoriesCtx = useContext(CategoriesCtx);
  return (
    <div>
      <h4>
        Filtered By: <strong>{categoriesCtx.currentSubcategory}</strong>
      </h4>
    </div>
  );
};

export default FilterList;
