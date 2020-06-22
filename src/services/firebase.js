import * as firebase from "firebase";
import firebaseOptions from "@/settings/firebase";
import { axiosFirebase } from "@/settings/axios";
// https://cloud.google.com/identity-platform/docs/reference/rest/v1
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
  },
  async getWatchList(uid) {
    return await axiosFirebase.get(`/watchlist/${uid}.json`);
  },
  async addWatchList(uid, data) {
    console.log("addWatchList", uid, data)
    return await axiosFirebase.put(`/watchlist/${uid}/${data.id}.json`, data);
  },
  async removeWatchList(uid, data) {
    return await axiosFirebase.delete(`/watchlist/${uid}/${data.id}.json`);
  }
};
