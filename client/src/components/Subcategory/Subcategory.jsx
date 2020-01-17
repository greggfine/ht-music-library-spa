import React from "react";
import "./Subcategory.styles.scss";
import Types from "../Types/Types";
import useToggleState from "../../hooks/useToggleState";

const Subcategory = ({
  subcategoryName,
  categories,
  currentMainCategory,
  handleSetCurrentSubcategory
}) => {
  const [showMoreBtn, toggleShowMoreBtn] = useToggleState();
  const [showTypes, toggleShowTypes] = useToggleState();

  const handleSubcategoryClick = subcategoryName => {
    toggleShowMoreBtn();
    handleSetCurrentSubcategory(subcategoryName);
  };

  return (
    <>
      <div className="Subcategory">
        <li
          className="Subcategory-item"
          onClick={() => handleSubcategoryClick(subcategoryName)}
        >
          {subcategoryName}
        </li>
        {showMoreBtn && (
          <>
            <button onClick={() => toggleShowTypes()} className="show-more">
              Show more...
            </button>
            {showTypes && (
              <Types
                categories={categories}
                currentMainCategory={currentMainCategory}
                currentSubcategory={subcategoryName}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Subcategory;
