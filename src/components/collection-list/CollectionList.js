import React from "react";
import { withRouter } from "react-router-dom";

import CollectionFinder from "../collection-finder/CollectionFinder";

const CollectionList = (props) => {
  const { collectionsArray } = props.collectionsArray;
  const { arrayNavbar } = props.arrayNavbar;
  //const { id } = props.id;

  return (
    <div className="collection-List-Container">
      {
        /********** collectionElement - it's collection's code, like '000107' ********** */
        /********** navbarElement - one element in Navbar with its submenu - array ********** */
        collectionsArray.map((collectionElement) =>
          arrayNavbar.map((navbarElement, index) => (
            <div key={index}>
              <CollectionFinder
                collectionCode={collectionElement}
                navbarElement={navbarElement}
                index={index}
                id={props.id}
              />
            </div>
          ))
        )
      }
    </div>
  );
};

export default withRouter(CollectionList);
