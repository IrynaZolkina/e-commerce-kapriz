import React from "react";
/*import Post from "./Post";*/

import "./items.css";
import Item from "../item/Item";
import { withRouter } from "react-router-dom";

const Items = ({ items }) => {
  //console.log("items-------------", items);
  return (
    <div>
      <div className="items-container">
        <div className="items-grid-container">
          {items.map((item) => (
            <Item {...item} key={item.id} />
          ))}
          {/*  <AddItem /> */}
        </div>
      </div>
    </div>
  );
};
export default withRouter(Items);
