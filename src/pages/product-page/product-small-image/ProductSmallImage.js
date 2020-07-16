import React from "react";

const ProductSmallImage = (props) => {
  const { imageUrl, imageName, editMode } = props;
  //console.log("++++", imageUrl);
  //if (imageUrl !== "" || imageName === "imageUrl1") {

  return (
    <div className="image-group">
      {editMode && (
        <div className=" flex-item upload-btn-wrapper">
          <button className="upload-btn">{props.imageTitle}</button>
          <input
            type="file"
            name={imageName}
            placeholder="file"
            onChange={props.handleImage}
          />
          <button
            onClick={() => props.handleDeleteImage(imageName)}
            className="upload-btn"
          >
            X
          </button>
        </div>
      )}

      <div className="product-image-item">
        {imageUrl !== "" && (
          <div
            className="product-image-small"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            alt=""
            onClick={() => props.handleChangeMainImage({ imageUrl })}
          />
        )}
      </div>
    </div>
  );
};

export default ProductSmallImage;
