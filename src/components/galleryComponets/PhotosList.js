import React, { useContext } from "react";
import RootContext from "../../context";
import styled from "styled-components";
import { Container } from "../../globalStyledComponents";
import { Link } from "react-router-dom";
import GalleryModal from "./GalleryModal";

const StyledPhotosList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const StyledTagList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const PhotosList = () => {
  const context = useContext(RootContext);
  const { photosList } = context;

  return (
    <>
      <Container xl>
        <GalleryModal />
        <StyledPhotosList>
          {photosList.map(({ alt_description, urls, tags }) => (
            <li>
              <img src={urls.small} alt={alt_description} />
              <StyledTagList>
                {tags.map((tag) => (
                  <li>
                    <Link>{tag.title}</Link>
                  </li>
                ))}
              </StyledTagList>
            </li>
          ))}
        </StyledPhotosList>
      </Container>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   photosList: state.photosList,
// });
// export default connect(mapStateToProps)(PhotosList);
export default PhotosList;
