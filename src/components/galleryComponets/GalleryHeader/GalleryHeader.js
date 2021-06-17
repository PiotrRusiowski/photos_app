import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../styles/globalStyledComponents";
import Navigation from "../Navigation.js/Navigation";
import {
  StyledGalleryHeader,
  StyledSearchValue,
} from "./GalleryHeaderStyledComponents";

const GalleryHeader = () => {
  const state = useSelector((state) => state);
  const { showSearchValue } = state;
  const main = false;
  return (
    <StyledGalleryHeader>
      <Navigation />
      <Container xl>
        <StyledSearchValue>{showSearchValue}</StyledSearchValue>
      </Container>
    </StyledGalleryHeader>
  );
};

export default GalleryHeader;
