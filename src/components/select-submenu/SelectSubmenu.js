import React, { Component } from "react";

class SelectSubmenu extends Component {
  state = {
    showSubmenu: true,
  };

  render() {
    const { submenu } = this.props;

    if (this.state.showSubmenu === true) {
      return (
        <div
          onClick={() => {
            this.setState({ showSubmenu: false });
            this.props.changeShowMenu();
            //setTimeout(() => this.setState({ clearSubmenu: true }), 500);
          }}
        >
          {submenu.map((element, index) => (
            /*  console.log(element.title.substring(0, 1), " element"), */
            <div key={index}>
              <div
                className="collection-submenu-element"
                onClick={() => {
                  this.props.addItemIntoCollections(
                    element.code,
                    element.number
                  );
                  /* console.log(
                        element.code,
                        element.number,

                        "---------number"
                      ); */
                }}
              >
                <div
                  className={`${
                    element.title.substring(0, 1) === "#"
                      ? "submenu-up"
                      : element.title.substring(0, 1) === "."
                      ? "submenu-middle"
                      : element.title.substring(0, 1) === "-"
                      ? "submenu-down"
                      : "submenu-html"
                  } collection-submenu-string`}
                >
                  {element.title.substring(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SelectSubmenu;
