import React, { useContext, useState } from "react";
import { CategoriesCtx } from "../CategoriesProvider";
import Form from "react-bootstrap/Form";

const Types = ({ currentMainCategory, currentSubCat }) => {
  const categoriesCtx = useContext(CategoriesCtx);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const handleSetCurrentSubgenres = currSubgenre => {
    if (categoriesCtx.currentSubgenreArr.includes(currSubgenre)) {
      const filteredArr = categoriesCtx.currentSubgenreArr.filter(genre => {
        return genre !== currSubgenre;
      });

      categoriesCtx.setCurrentSubgenreArr(filteredArr);
    } else {
      categoriesCtx.setCurrentSubgenreArr([
        ...categoriesCtx.currentSubgenreArr,
        currSubgenre
      ]);
    }
  };

  const currentMainCategoryObj = categoriesCtx.categories.find(category => {
    return category.mainCategoryName === currentMainCategory;
  });
  const currentSubcategoryObj = currentMainCategoryObj.subcategories.find(
    subcategory => subcategory.subcategoryName === currentSubCat
  );

  //   const handleFormClick = subCategoryType => {
  //     console.log(categoriesCtx);
  //     setSelectedSubcategories([...selectedSubcategories, subCategoryType]);
  //   };

  const typesList = currentSubcategoryObj.subcategoryTypes.map(
    (subgenreType, idx) => {
      // return <li key={idx}>{type}</li>;
      return (
        <Form key={idx}>
          {/* {["checkbox"].map(type => ( */}
          {/* <div key={`default-${type}`} className="mb-3"> */}
          <div key={`default-checkbox`} className="mb-3">
            <Form.Check
              //   type={type}
              type="checkbox"
              // id={`default-${type}`}
              id={`default-checkbox`}
              label={subgenreType}
              onClick={() => handleSetCurrentSubgenres(subgenreType)}
              //   onClick={() => handleFormClick(subgenreType)}
            />
          </div>
          {/* ))} */}
        </Form>
      );
    }
  );

  return <div>{typesList}</div>;
};

export default Types;
