import * as firebase from "firebase";
import firebaseOptions from "@/settings/firebase";

export default {
  initializeApp() {
    return firebase.initializeApp(firebaseOptions);
  },
  auth(store) {
    firebase.auth().onAuthStateChanged(user => {
      store.dispatch("user/fetchUser", user);
    });
  },
  async register(email, password) {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  },
  async signIn(email, password) {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
  },
  async signOut() {
    return await firebase.auth().signOut();
  }
};
