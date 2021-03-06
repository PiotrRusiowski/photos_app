import React, { useContext } from "react";
import RootContext from "../../../../context";
import {
  StyledCarouselBtn,
  StyledCarouselBtnGroup,
  StyledSuggestionsList,
  StyledSugestListElement,
} from "./SuggestionsListStyledComponents.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { handleSearchInputValueChange } from "../../../../actions";
import { useDispatch } from "react-redux";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 4,
  },
  mobile: {
    breakpoint: { max: 425, min: 375 },
    items: 2,
    slidesToSlide: 2,
  },
  mobileS: {
    breakpoint: { max: 375, min: 200 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({
  next,
  previous,
  goToSlide,
  suggestionsArray,
  ...rest
}) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <>
      {suggestionsArray.length > 8 ? (
        <StyledCarouselBtnGroup>
          <StyledCarouselBtn
            left
            className={currentSlide === 0 ? "disable" : ""}
            onClick={() => previous()}
            style={{ left: "30px" }}
          >
            <ArrowBackIosIcon fontSize="inherit" />
          </StyledCarouselBtn>
          <StyledCarouselBtn
            right
            style={{ right: "-30px" }}
            onClick={() => next()}
          >
            <ArrowForwardIosIcon color="inherit" fontSize="inherit" />
          </StyledCarouselBtn>
        </StyledCarouselBtnGroup>
      ) : (
        ""
      )}
    </>
  );
};

const SuggestionsList = ({ suggestionsArray, main }) => {
  const context = useContext(RootContext);
  const dispatch = useDispatch();
  const { getPhotos } = context;

  return (
    <StyledSuggestionsList main={main}>
      <Carousel
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={true}
        arrows={false}
        customButtonGroup={<ButtonGroup suggestionsArray={suggestionsArray} />}
      >
        {suggestionsArray.map((suggest, index) => (
          <div key={`${index}${suggest}`}>
            <StyledSugestListElement
              main={main}
              onClick={(e) => {
                dispatch(handleSearchInputValueChange(suggest));
                getPhotos(e, suggest);
              }}
            >
              {suggest}
            </StyledSugestListElement>
          </div>
        ))}
      </Carousel>
    </StyledSuggestionsList>
  );
};

export default SuggestionsList;
