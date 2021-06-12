import React, { useContext, useRef } from "react";
import RootContext from "../../../context";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { handleSearchInputValueChange } from "../../../actions";
import { useDispatch } from "react-redux";

import {
  StyledSearchInput,
  StyledSearchBtn,
  StyledPopper,
  StyledPopperListElement,
  StyledSearchWrapper,
  StyledForm,
  StyledSearch,
} from "../SearchStyledsComponents";

const Search = ({ gallery }) => {
  const dispatch = useDispatch();
  const context = useContext(RootContext);
  const {
    inputValue,
    keyWordsArray,
    setInputValue,
    getPhotos,
    activeSearchType,
    changeSearchInputValueByClickingOnSuggestionList,
    handleHeaderInputValue,
    headerInputValue,
  } = context;
  const headerPopperRef = useRef(null);
  const visible = (e) => {
    if (e.target.value.length < 3) {
      headerPopperRef.current.style.display = "none";
    } else {
      headerPopperRef.current.style.display = "block";
    }
  };
  return (
    <StyledSearchWrapper gallery={gallery}>
      <StyledForm
        onSubmit={(e) => {
          getPhotos(e);
        }}
      >
        <StyledSearch>
          <StyledSearchBtn type="submit">
            <SearchIcon fontSize="inherit" />
          </StyledSearchBtn>

          <StyledSearchInput
            type="text"
            placeholder="Search photos"
            onChange={(e) => {
              handleHeaderInputValue(e);
              dispatch(handleSearchInputValueChange(e.target.value));
              visible(e);
            }}
            name="searchPhotos"
            autoComplete="off"
          />
          {inputValue.length ? (
            <StyledSearchBtn onClick={() => setInputValue("")}>
              <CloseIcon fontSize="inherit" />
            </StyledSearchBtn>
          ) : null}
        </StyledSearch>

        <StyledPopper ref={headerPopperRef} gallery={gallery}>
          <ul>
            {keyWordsArray.map((word, index) => (
              <>
                {index <= 4 ? (
                  <Link
                    style={{ color: "black" }}
                    to={`/search/${activeSearchType}/${word}`}
                  >
                    <StyledPopperListElement
                      key={index}
                      type="submit"
                      onClick={(e) => {
                        changeSearchInputValueByClickingOnSuggestionList(word);

                        getPhotos(e, word);
                      }}
                    >
                      {word}
                    </StyledPopperListElement>
                  </Link>
                ) : null}
              </>
            ))}
          </ul>
        </StyledPopper>
      </StyledForm>
    </StyledSearchWrapper>
  );
};

export default Search;
