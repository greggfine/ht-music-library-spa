import React from "react";
import "./Subcategory.styles.scss";
import Types from "../Types/Types";
import useToggleState from "../../hooks/useToggleState";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Subcategory = ({
  subcategoryName,
  currentMainCategory,
  handleSetCurrentSubcategory
}) => {
  const [showMoreBtn, toggleShowMoreBtn] = useToggleState();
  const [show, setShow] = useToggleState();
  const handleClose = () => {
    setShow(false);
    toggleShowMoreBtn();
    console.log("closed");
  };
  const handleShow = () => setShow(true);

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
            <button
              onClick={handleShow}
              className="btn btn-success show-more-btn"
            >
              Show more...
            </button>
            {show && (
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Select subcategories...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Types
                    currentMainCategory={currentMainCategory}
                    currentSubCat={subcategoryName}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Subcategory;
