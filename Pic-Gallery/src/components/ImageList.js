import React from "react";

const ImageList = (props) => {
  const imageItems = props.images.map((image) => (
    <img src={image.urls.regular} />
  ));
  return <div>{imageItems}</div>;
};

export default ImageList;
