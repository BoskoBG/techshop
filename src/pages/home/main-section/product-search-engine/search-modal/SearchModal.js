import classes from "./SearchModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchCategories from "./categories/SearchCategories";
import SearchBrand from "./brand/SearchBrand";
import SearchSpecifications from "./spec/SearchSpecifications";
import { uiActions } from "../../../../../store/ui";
import { IoMdClose } from "react-icons/io";

const SearchModal = ({
  selectSubcategory,
  selectedSubcategory,
  selectBrand,
}) => {
  const searchModalState = useSelector((state) => {
    return state.ui.searchModalOpen;
  });
  const dispatch = useDispatch();

  let modalClasses = "";
  let pointerClasses = "";
  if (searchModalState.type === "category") {
    modalClasses = `${classes.modal} ${classes.category}`;
    pointerClasses = `${classes.pointer} ${classes["pointer-category"]}`;
  } else if (searchModalState.type === "brand") {
    modalClasses = `${classes.modal} ${classes.brand}`;
    pointerClasses = `${classes.pointer} ${classes["pointer-brand"]}`;
  } else {
    modalClasses = `${classes.modal} ${classes.spec}`;
    pointerClasses = `${classes.pointer} ${classes["pointer-spec"]}`;
  }

  const closeModalHandler = () => {
    dispatch(uiActions.closeSearchModal());
  };

  return (
    searchModalState.open && (
      <div className={modalClasses}>
        <div className={classes["close-btn"]} onClick={closeModalHandler}>
          <IoMdClose></IoMdClose>
        </div>
        {searchModalState.open && searchModalState.type === "category" && (
          <SearchCategories
            selectBrand={selectBrand}
            selectSubcategory={selectSubcategory}
            selectedSubcategory={selectedSubcategory}
          ></SearchCategories>
        )}
        {searchModalState.open && searchModalState.type === "brand" && (
          <SearchBrand
            selectedSubcategory={selectedSubcategory}
            selectBrand={selectBrand}
          ></SearchBrand>
        )}
        {searchModalState.open && searchModalState.type === "spec" && (
          <SearchSpecifications></SearchSpecifications>
        )}
        <div className={pointerClasses}></div>
      </div>
    )
  );
};

export default SearchModal;
