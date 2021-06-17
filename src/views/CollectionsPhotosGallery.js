import React from "react";
import PhotosList from "../components/galleryComponets/Lists/PhotosList/PhotosList";
import { useSelector } from "react-redux";

const CollectionsPhotosList = () => {
  const singleCollectionPhotos = useSelector(
    ({ singleCollectionPhotos }) => singleCollectionPhotos
  );
  return <PhotosList photosList={singleCollectionPhotos} />;
};

export default CollectionsPhotosList;
