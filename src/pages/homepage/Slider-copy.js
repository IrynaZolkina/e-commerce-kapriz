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
    var now = new Date().getTime();
    console.log(now, "new Date().getTime();");
    // Find the distance between now and the count down date
    var distance = now - this.state.time;
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var seconds = Math.floor(distance / 1000);

    var seconds1 = seconds % 40;
    var seconds2 = Math.floor(seconds1 / 5);

    this.setState({ slideChosen: seconds2 });
  };
  stopTimerArrowRight = () => {
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
  };
  render() {
    console.log(this.state.slideChosen, "this.state.slideChosen");
    return (
      <div>
        {this.state.slideChosen === 0 ? (
          <div className="container-slider">
            <div className="arrow-left" onClick={this.stopTimerArrowLeft}>
              &#10094;
            </div>
            <div className="arrow-right" onClick={this.stopTimerArrowRight}>
              &#10095;
            </div>
            <div className="slider" onClick={this.stopTimer}>
              <figure>
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b"`,
                  }}
                />

                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp5.jpg?alt=media&token=f0937e65-d0c2-40a3-ace4-e7365aa7e7ff")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp6.jpg?alt=media&token=fd8f831a-ac73-44c7-a31d-570f67881218")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg50.jpg?alt=media&token=8240a773-e115-4a10-b7a5-71d26e84071f")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimj53.jpg?alt=media&token=eecaa71f-ec24-48ac-8d26-a0cc2210ea33")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c")`,
                  }}
                />
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a")`,
                  }}
                />
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
                  className="active-item active-item-moving"
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
              </div>
            </div>

            <div className="slider1" onClick={this.stopTimer}>
              <div className="par">
                <p className="par1">НОВИНКИ СЕЗОНА</p>
                <p className="par2">{"НОВИНКИ СЕЗОНА".toUpperCase()}</p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Christian DIOR Jadore</p>
                <p className="par2">{" класика яка заворожує".toUpperCase()}</p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Christian Dior "Miss Dior"</p>
                <p className="par2">
                  {"кохання з першої ноти... Miss Dior".toUpperCase()}
                </p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Nina Ricci</p>
                <p className="par2">
                  {"Дотик італійської магії".toUpperCase()}
                </p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Christian Dior "Savage"</p>
                <p className="par2">
                  {"нова легенда світу парфумерії".toUpperCase()}
                </p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Montale</p>
                <p className="par2">
                  {"аромат твоєї індивідуальності".toUpperCase()}
                </p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Gucci "Flora by Gucci"</p>
                <p className="par2">
                  {"Твоя ніжність в кожній ноті парфуму....".toUpperCase()}
                </p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">Narciso Rodrigues</p>
                <p className="par2">{"Спокуслива жіночність".toUpperCase()}</p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
              <div className="par">
                <p className="par1">НОВИНКИ СЕЗОНА</p>
                <p className="par2">{"НОВИНКИ СЕЗОНА".toUpperCase()}</p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
            </div>
          </div>
        ) : this.state.slideChosen === 1 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 8 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 2 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a")`,
                  }}
                />
              </div>
            </div>
            <div className="control-group ">
              <span
                className="control-item"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
                }}
              ></span>
              <span
                className="active-item active-item-1"
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
            </div>
            <div className="slide1" onClick={this.stopTimer}>
              <div className="sl-par">
                <p className="sl-par1">НОВИНКИ СЕЗОНА</p>
                <p className="sl-par2">{"НОВИНКИ СЕЗОНА".toUpperCase()}</p>
                <div className="btn btn-large">ПОСМОТРЕТЬ</div>
              </div>
            </div>
          </div>
        ) : this.state.slideChosen === 2 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 1 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 3 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-2"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>
            <div className="slide1">
              <p className="sl-par1">Christian DIOR Jadore</p>
              <p className="sl-par2">
                {" класика яка заворожує".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 3 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 2 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 4 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-3"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>
            <div className="slide1">
              <p className="sl-par1">Christian Dior "Miss Dior"</p>
              <p className="sl-par2">
                {"кохання з першої ноти... Miss Dior".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 4 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 3 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 5 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp5.jpg?alt=media&token=f0937e65-d0c2-40a3-ace4-e7365aa7e7ff")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-4"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>

            <div className="slide1">
              <p className="sl-par1">Nina Ricci</p>
              <p className="sl-par2">
                {"Дотик італійської магії".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 5 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 4 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 6 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp6.jpg?alt=media&token=fd8f831a-ac73-44c7-a31d-570f67881218")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-5"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>

            <div className="slide1">
              <p className="sl-par1">Christian Dior "Savage"</p>
              <p className="sl-par2">
                {"нова легенда світу парфумерії".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 6 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 5 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 7 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg50.jpg?alt=media&token=8240a773-e115-4a10-b7a5-71d26e84071f")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-6"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>

            <div className="slide1">
              <p className="sl-par1">Montale</p>
              <p className="sl-par2">
                {"аромат твоєї індивідуальності".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 7 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 6 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 8 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimj53.jpg?alt=media&token=eecaa71f-ec24-48ac-8d26-a0cc2210ea33")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-7"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>

            <div className="slide1">
              <p className="sl-par1">Gucci "Flora by Gucci"</p>
              <p className="sl-par2">
                {"Твоя ніжність в кожній ноті парфуму....".toUpperCase()}
              </p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : this.state.slideChosen === 8 ? (
          <div className="container-one-slide">
            <div
              className="arrow-left"
              onClick={() => {
                this.setState({ slideChosen: 7 });
              }}
            >
              &#10094;
            </div>
            <div
              className="arrow-right"
              onClick={() => {
                this.setState({ slideChosen: 1 });
              }}
            >
              &#10095;
            </div>
            <div className="slide" onClick={this.stopTimer}>
              <div className="fig-sl">
                <div
                  className="background-image-sl"
                  style={{
                    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c")`,
                  }}
                />
              </div>
            </div>
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
                className="active-item active-item-8"
                onClick={() => {
                  this.setState({ slideChosen: 1 });
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
            </div>

            <div className="slide1">
              <p className="sl-par1">Narciso Rodrigues</p>
              <p className="sl-par2">{"Спокуслива жіночність".toUpperCase()}</p>
              <div className="btn btn-large">ПОСМОТРЕТЬ</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Slider;
