import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    userVaults: []
  },
  mutations: {
    setPublicKeeps(state, keeps) {
      state.publicKeeps = keeps;

    },
    setUserVaults(state, vaults) {
      state.userVaults = vaults;

    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getPublicKeeps({ commit }) {
      console.log("getPublicKeeps called: ")
      try {
        let res = await api.get("keeps");
        commit("setPublicKeeps", res.data)
        console.log("result of getPublicKeeps: ", res)
      } catch (error) {
        console.error(error);
      }
    },

    async getUserVaults({ commit }, id) {
      try {
        let res = await api.get("vaults");
        commit("setUserVaults", res.data);
        console.log("result of getUserVaults: ", res)

      } catch (error) {
        console.error(error)
      }
    },
    async deleteVault({ dispatch }, id) {
      try {
        await api.delete("vaults/" + id);
        dispatch("getUserVaults");
      } catch (error) {
        console.error(error)
      }
    }
  }
});
