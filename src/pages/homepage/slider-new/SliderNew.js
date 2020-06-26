/********* 5 slider with radio-buttons ***************/
import React from "react";
import "./slider-new.scss";

const SliderNew = () => {
  return (
    <div className="slideshow cen">
      <div className="slides">
        <input type="radio" name="p" id="c1" />
        <input type="radio" name="p" id="c2" />
        <input type="radio" name="p" id="c3" />
        <input type="radio" name="p" id="c4" />
        <input type="radio" name="p" id="c5" />
        <div className="slide pc1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b"
            alt=""
          />
        </div>
        <div className="slide ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f"
            alt=""
          />
        </div>
        <div className="slide ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a"
            alt=""
          />
        </div>
        <div className="slide ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimj53.jpg?alt=media&token=eecaa71f-ec24-48ac-8d26-a0cc2210ea33"
            alt=""
          />
        </div>
        <div className="slide ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c"
            alt=""
          />
        </div>
      </div>
      <div className="change">
        <label className="tool" htmlFor="c1"></label>
        <label className="tool" htmlFor="c2"></label>
        <label className="tool" htmlFor="c3"></label>
        <label className="tool" htmlFor="c4"></label>
        <label className="tool" htmlFor="c5"></label>
      </div>
    </div>
  );
};

export default SliderNew;
