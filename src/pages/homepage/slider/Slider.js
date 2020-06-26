import React from "react";
import "./slider.css";
import "../button/button.css";

const Slider = () => {
  return (
    <div>
      <div className="container-slider">
        <div className="slider">
          {/* <figure>
            <div className="sl sl1">' '</div>
            <div className="sl sl2">' '</div>
            <div className="sl sl3">' '</div>
            <div className="sl sl4">' '</div>
            <div className="sl sl5">' '</div>
          </figure> */}
          <figure>
            {/* <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a"
              alt=""
            /> */}

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
              style={{
                backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b")`,
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
              /* style={{
                backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg51.jpg?alt=media&token=db6d6e7d-b1b6-4fa9-9daa-e18baeabe4d4")`,
              }} */
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
        <div className="slider1">
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
            <p className="par2">{"Дотик італійської магії".toUpperCase()}</p>
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
    </div>
  );
};

export default Slider;
