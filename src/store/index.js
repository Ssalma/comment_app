import { createStore, createLogger } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";

const state = {
  comments: [],
  currentUser: {},
  postLoaded: null,
  loading: false,
  btnLoading: false,
};

export default createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});
