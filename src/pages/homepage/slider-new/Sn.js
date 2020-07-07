import React, { Component } from "react";

import "./sn.scss";

class Sn extends Component {
  render() {
    return (
      <div className="b-body">
        <div className="nav-area">
          <input type="checkbox" className="hamburger-menu" />
          <div className="nav-icon">
            <div></div>
          </div>
          <div className="main-menu">
            <div>
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-area">
          <div className="wrapper banner-text">
            <h1>Mouri Themes</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab
              explicabo, nemo tempora amet corporis ipsa, repellat repellendus
              aspernatur officiis, et ut obcaecati quod accusamus veritatis
              voluptatum quibusdam nostrum sit?
            </p>
            <a href="#" className="btn-area">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Sn;
