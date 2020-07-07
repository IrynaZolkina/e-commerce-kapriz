import React from "react";

const Rainbow = (WrappedComponent) => {
  const slideNumbers = ["slide-one", "slide-two", "slide-three"];
  slideNumbers.map((slide, index) => {
    const className = slide;
    console.log(className, "jjjjjjjjjjj");
    return (props) => {
      return (
        <div className={className}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  });
};

export default Rainbow;
