import React, { useState } from "react";
import "./Subcategory.styles.scss";
import Types from "../Types/Types";
import useToggleState from "../../hooks/useToggleState";

const Subcategory = ({ subcategoryName, categories, currentMainCategory }) => {
  const [showMoreBtn, toggleShowMoreBtn] = useToggleState();
  const [showTypes, toggleShowTypes] = useToggleState();

  //   When we click on "Jazz", we toggle the showMoreBtn
  // We also LOAD up the first 25 tracks that have genre: 'jazz'

  return (
    <>
      <li className="Subcategory" onClick={toggleShowMoreBtn}>
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
    </>
  );
};

export default Subcategory;
