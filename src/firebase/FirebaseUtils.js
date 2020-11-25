import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC_W3ZW4MOhN3GurxjEBoXjUd5TCkNXtRc",
  //apiKey: "AIzaSyADx2k-13JhQVydDsytH93Ff1ApgMME7Pg",
  authDomain: "justclockit-a0fa1.firebaseapp.com",
  databaseURL: "https://justclockit-a0fa1.firebaseio.com",
  projectId: "justclockit-a0fa1",
  storageBucket: "justclockit-a0fa1.appspot.com",
  messagingSenderId: "502525191385",
  appId: "1:502525191385:web:37467ce4ce1b9ba2f80ac8",
  measurementId: "G-C29LGTRMBD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot, "---snapshot");
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log("hello");

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

/* import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC_W3ZW4MOhN3GurxjEBoXjUd5TCkNXtRc",
  authDomain: "justclockit-a0fa1.firebaseapp.com",
  databaseURL: "https://justclockit-a0fa1.firebaseio.com",
  projectId: "justclockit-a0fa1",
  storageBucket: "justclockit-a0fa1.appspot.com",
  messagingSenderId: "502525191385",
  appId: "1:502525191385:web:37467ce4ce1b9ba2f80ac8",
  measurementId: "G-C29LGTRMBD",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot, "---snapshot");

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    const add = "hello";

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        add,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error Creating User", error.message);
    }
  }
  //return userRef;
  return getUserDocument(userAuth.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.collection("users").doc(uid).get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error Fetching User", error.message);
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

//   Google  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//   Google  

export const signOut = () => auth.signOut();

export default firebase;
 */
