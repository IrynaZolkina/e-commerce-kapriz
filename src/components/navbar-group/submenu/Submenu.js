/**** Subenu component is called from Navbar */

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import SubmenuElement from "../submenu-elment/SubmenuElement";

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
    };
  }
  render() {
    //const navbarSubMenu = this.props.navbarSubMenu.map((el) => el.title);
    const navbarSubMenu = this.props.navbarSubMenu;

    //console.log(navbarSubMenu, "navbarSubMenu");
    const { submenuItemsInColumn } = this.props;
    //console.log(order, "order");
    let column1 = [];
    let column2 = [];
    let column3 = [];
    let column4 = [];
    let column5 = [];
    let column6 = [];

    navbarSubMenu.forEach((element, index) => {
      if (index < submenuItemsInColumn.first) {
        column1 = [...column1, element];
      } else {
        if (
          (index >= submenuItemsInColumn.first) &
          (index < submenuItemsInColumn.second)
        ) {
          column2 = [...column2, element];
        } else {
          if (
            (index >= submenuItemsInColumn.second) &
            (index < submenuItemsInColumn.third)
          ) {
            column3 = [...column3, element];
          } else {
            if (
              (index >= submenuItemsInColumn.third) &
              (index < submenuItemsInColumn.forth)
            ) {
              column4 = [...column4, element];
            } else {
              if (
                (index >= submenuItemsInColumn.forth) &
                (index < submenuItemsInColumn.fifth)
              ) {
                column5 = [...column5, element];
              } else {
                if (index < submenuItemsInColumn.sixth) {
                  column6 = [...column6, element];
                }
              }
            }
          }
        }
      }
    });

    if (this.state.clearSubmenu === true) {
      return (
        /*  <div className="test47"> */
        <div className="navbar-submenu-container">
          <div
            className="menu-sub"
            onClick={() => {
              this.setState({ clearSubmenu: false });
              setTimeout(() => this.setState({ clearSubmenu: true }), 200);
            }}
          >
            {/* /************ FIRST COLUMN************  */}
            <div
              className={`${
                column6.length === 0 ? "menu-col-1-5" : "menu-col-1-6"
              }`}
            >
              {column1.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>

            {/* /************ SECOND COLUMN************  */}
            <div
              className={`${
                column6.length === 0 ? "menu-col-2-5" : "menu-col-2-6"
              }`}
            >
              {column2.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>
            {/************ THIRD COLUMN************/}
            <div
              className={`${
                column6.length === 0 ? "menu-col-3-5" : "menu-col-3-6"
              }`}
            >
              {column3.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>
            {/* /************ FORTH COLUMN************  */}
            <div
              className={`${
                column6.length === 0 ? "menu-col-4-5" : "menu-col-4-6"
              }`}
            >
              {column4.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>
            {/* /************ 5-TH COLUMN************  */}
            <div
              className={`${
                column6.length === 0 ? "menu-col-5-5" : "menu-col-5-6"
              }`}
            >
              {column5.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>
            {/* /************ 6-TH COLUMN************  */}
            <div className={`${column6.length === 0 ? "" : "menu-col-6-6"}`}>
              {column6.map((element, index) => (
                <ul key={index} className="">
                  <SubmenuElement element={element} index={index} />
                </ul>
              ))}
            </div>
          </div>
        </div>
        /*   </div> */
      );
    } else {
      return null;
    }
  }
}
export default withRouter(Submenu);
