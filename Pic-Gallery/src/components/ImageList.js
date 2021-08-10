import React from "react";

const ImageList = (props) => {
  const imageItems = props.images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.regular} />
  ));
  return <div>{imageItems}</div>;
};

export default ImageList;
