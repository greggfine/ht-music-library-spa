import React from "react";

const FilterList = ({ currentSubcategory }) => {
  return (
    <div>
      <h4>
        Filtered By: <strong>{currentSubcategory}</strong>
      </h4>
    </div>
  );
};

export default FilterList;
