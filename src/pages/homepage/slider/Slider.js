import React, { Component } from "react";
import "./slider.scss";
import "../button/button.css";

class Slider extends Component {
  state = {
    time: 0,
    slideChosen: 0,
  };
  componentDidMount = () => {
    var countDownDate = new Date().getTime();
    this.setState({ time: countDownDate });
  };
  stopTimer = () => {
    var now = new Date().getTime();
    console.log(now, "new Date().getTime();");
    // Find the distance between now and the count down date
    var distance = now - this.state.time;
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var seconds = Math.floor(distance / 1000);

    var seconds1 = seconds % 40;
    var seconds2 = Math.floor(seconds1 / 5) + 1;

    this.setState({ slideChosen: seconds2 });

    console.log(distance, "distance");
    console.log(seconds, "seconds");

    console.log(seconds1, "seconds1");
    console.log(seconds2, "seconds2");
  };
  stopTimerArrowLeft = () => {
    let i = this.state.slideChosen;

    if (i > 0) {
      if (i === 1) this.setState({ slideChosen: 8 });
      else this.setState({ slideChosen: i - 1 });
    } else {
      var now = new Date().getTime();
      console.log(now, "new Date().getTime();");
      // Find the distance between now and the count down date
      var distance = now - this.state.time;
      //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var seconds = Math.floor(distance / 1000);

      var seconds1 = seconds % 40;
      var seconds2 = Math.floor(seconds1 / 5);

      this.setState({ slideChosen: seconds2 });
    }
  };
  stopTimerArrowRight = () => {
    let i = this.state.slideChosen;

    if (i > 0) {
      if (i === 8) this.setState({ slideChosen: 1 });
      else this.setState({ slideChosen: i + 1 });
    } else {
      var now = new Date().getTime();
      console.log(now, "new Date().getTime();");
      // Find the distance between now and the count down date
      var distance = now - this.state.time;
      //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var seconds = Math.floor(distance / 1000);

      var seconds1 = seconds % 40;
      var seconds2 = Math.floor(seconds1 / 5) + 2;

      this.setState({ slideChosen: seconds2 });

      console.log(distance, "distance");
      console.log(seconds, "seconds");

      console.log(seconds1, "seconds1");
      console.log(seconds2, "seconds2");
    }
  };
  render() {
    console.log(this.state.slideChosen, "this.state.slideChosen");
    const sliderImagesArray = [
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b"`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp5.jpg?alt=media&token=f0937e65-d0c2-40a3-ace4-e7365aa7e7ff")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp6.jpg?alt=media&token=fd8f831a-ac73-44c7-a31d-570f67881218")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg50.jpg?alt=media&token=8240a773-e115-4a10-b7a5-71d26e84071f")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimj53.jpg?alt=media&token=eecaa71f-ec24-48ac-8d26-a0cc2210ea33")`,
      `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c")`,
    ];
    return (
      <div>
        {/* {this.state.slideChosen === 0 ? ( */}
        <div className="container-slider">
          <div className="arrow-left" onClick={this.stopTimerArrowLeft}>
            &#10094;
          </div>
          <div className="arrow-right" onClick={this.stopTimerArrowRight}>
            &#10095;
          </div>
          <div className="slider" onClick={this.stopTimer}>
            <figure
              className={
                this.state.slideChosen === 1
                  ? "fixed-slide fixed-slide-1"
                  : this.state.slideChosen === 2
                  ? "fixed-slide fixed-slide-2"
                  : this.state.slideChosen === 3
                  ? "fixed-slide fixed-slide-3"
                  : this.state.slideChosen === 3
                  ? "fixed-slide fixed-slide-3"
                  : this.state.slideChosen === 4
                  ? "fixed-slide fixed-slide-4"
                  : this.state.slideChosen === 5
                  ? "fixed-slide fixed-slide-5"
                  : this.state.slideChosen === 6
                  ? "fixed-slide fixed-slide-6"
                  : this.state.slideChosen === 7
                  ? "fixed-slide fixed-slide-7"
                  : this.state.slideChosen === 8
                  ? "fixed-slide fixed-slide-8"
                  : "figure"
              }
            >
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[0],
                }}
              >
                <div className="par">
                  <p className="par1">НОВИНКИ СЕЗОНА</p>
                  <p className="par2">{"НОВИНКИ СЕЗОНА".toUpperCase()}</p>
                  <div
                    className="btn btn-large"
                    onClick={() => console.log("ПОСМОТРЕТЬ")}
                  >
                    ПОСМОТРЕТЬ
                  </div>
                </div>{" "}
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[1],
                }}
              >
                <div className="par">
                  <p className="par1">Christian DIOR Jadore</p>
                  <p className="par2">
                    {" класика яка заворожує".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>

              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[2],
                }}
              >
                <div className="par">
                  <p className="par1">Christian Dior "Miss Dior"</p>
                  <p className="par2">
                    {"кохання з першої ноти... Miss Dior".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[3],
                }}
              >
                <div className="par">
                  <p className="par1">Nina Ricci</p>
                  <p className="par2">
                    {"Дотик італійської магії".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[4],
                }}
              >
                <div className="par">
                  <p className="par1">Christian Dior "Savage"</p>
                  <p className="par2">
                    {"нова легенда світу парфумерії".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[5],
                }}
              >
                <div className="par">
                  <p className="par1">Montale</p>
                  <p className="par2">
                    {"аромат твоєї індивідуальності".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[6],
                }}
              >
                <div className="par">
                  <p className="par1">Gucci "Flora by Gucci"</p>
                  <p className="par2">
                    {"Твоя ніжність в кожній ноті парфуму....".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[7],
                }}
              >
                <div className="par">
                  <p className="par1">Narciso Rodrigues</p>
                  <p className="par2">
                    {"Спокуслива жіночність".toUpperCase()}
                  </p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
              <div
                className="background-image-sl"
                style={{
                  backgroundImage: sliderImagesArray[0],
                }}
              >
                <div className="par">
                  <p className="par1">НОВИНКИ СЕЗОНА</p>
                  <p className="par2">{"НОВИНКИ СЕЗОНА".toUpperCase()}</p>
                  <div className="btn btn-large">ПОСМОТРЕТЬ</div>
                </div>
              </div>
            </figure>
          </div>

          <div className="control-group-wrap">
            <div className="control-group ">
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
                }}
              ></span>

              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 2 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 3 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 4 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 5 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 6 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 7 });
                }}
              ></span>
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 8 });
                }}
              ></span>
              <span
                className={
                  this.state.slideChosen === 0
                    ? "active-item active-item-moving"
                    : this.state.slideChosen === 1
                    ? "active-item active-item-chosen-1"
                    : this.state.slideChosen === 2
                    ? "active-item active-item-chosen-2"
                    : this.state.slideChosen === 3
                    ? "active-item active-item-chosen-3"
                    : this.state.slideChosen === 4
                    ? "active-item active-item-chosen-4"
                    : this.state.slideChosen === 5
                    ? "active-item active-item-chosen-5"
                    : this.state.slideChosen === 6
                    ? "active-item active-item-chosen-6"
                    : this.state.slideChosen === 7
                    ? "active-item active-item-chosen-7"
                    : this.state.slideChosen === 8
                    ? "active-item active-item-chosen-8"
                    : ""
                }
              ></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
