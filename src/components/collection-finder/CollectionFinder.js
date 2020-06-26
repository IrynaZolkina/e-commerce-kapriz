import React from "react";
import { firestore } from "../../firebase/FirebaseUtils";

const CollectionFinder = ({ collectionCode, navbarElement, index, id }) => {
  let fullCollectionsName = "";

  let nnn = "";
  let n1 = "";
  //console.log("collectionCode", collectionCode);
  //console.log("navbarElement", navbarElement);

  const deleteItemFromCollection = () => {
    //let doc1 = [];
    firestore.collection(collectionCode).doc(id).delete();
    firestore
      .collection("items")
      .doc(id)
      .get()
      .then((doc) => {
        const doc11 = doc.data().collectionsArray;

        const doc1 = doc11.filter((element) => {
          return element !== collectionCode;
        });
        firestore.collection("items").doc(id).set(
          {
            collectionsArray: doc1,
          },
          { merge: true }
        );
      });
  };

  if (navbarElement.code === collectionCode) {
    fullCollectionsName = navbarElement.title.toUpperCase() + "./."; //+ navbarElement.code
  } else {
    navbarElement.subMenu.map((submenuElement) =>
      submenuElement.code === collectionCode
        ? submenuElement.number.substring(2, 4) !== "00"
          ? ((nnn = navbarElement.subMenu.filter(
              (element) =>
                element.number ===
                submenuElement.number.substring(0, 4) + "0000"
            )),
            ([n1] = nnn),
            (fullCollectionsName =
              navbarElement.title.toUpperCase() +
              "../.." +
              n1.title.substring(1)),
            submenuElement.number.substring(4, 6) === "00"
              ? submenuElement.number.substring(6, 8) !== "00"
                ? (fullCollectionsName =
                    fullCollectionsName +
                    ".../..." +
                    submenuElement.title.substring(1))
                : null
              : ((nnn = navbarElement.subMenu.filter(
                  (element) =>
                    element.number ===
                    submenuElement.number.substring(0, 6) + "00"
                )),
                ([n1] = nnn),
                (fullCollectionsName =
                  fullCollectionsName +
                  ".../..." +
                  n1.title.toUpperCase().substring(1)),
                submenuElement.number.substring(6, 8) === "00"
                  ? null
                  : (fullCollectionsName =
                      fullCollectionsName +
                      "...../....." +
                      submenuElement.title.substring(1))))
          : submenuElement.number.substring(4, 6) === "00"
          ? submenuElement.number.substring(6, 8) !== "00"
            ? (fullCollectionsName =
                navbarElement.title.toUpperCase() +
                "../.." +
                fullCollectionsName +
                submenuElement.title.substring(1))
            : null
          : ((nnn = navbarElement.subMenu.filter(
              (element) =>
                element.number === submenuElement.number.substring(0, 6) + "00"
            )),
            ([n1] = nnn),
            (fullCollectionsName =
              navbarElement.title.toUpperCase() +
              "../.." +
              fullCollectionsName +
              n1.title.toUpperCase().substring(1)),
            submenuElement.number.substring(6, 8) === "00"
              ? null
              : (fullCollectionsName =
                  fullCollectionsName +
                  "...../....." +
                  submenuElement.title.substring(1)))
        : null
    );
  }
  if (fullCollectionsName !== "") {
    return (
      <div>
        <div className="collection-title">
          {" "}
          <div>{fullCollectionsName}</div>
          <button onClick={deleteItemFromCollection}> "DELETE"</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CollectionFinder;
