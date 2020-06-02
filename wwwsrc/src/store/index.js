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
    userKeeps: [],
    userVaults: [],
    vaultKeeps: [],
    activeKeep: {},
    activeVault: {}
  },
  mutations: {
    setPublicKeeps(state, keeps) {
      state.publicKeeps = keeps;
    },
    setUserKeeps(state, keeps) {
      state.userKeeps = keeps;
    },

    setActiveKeep(state, activeKeep) {
      state.activeKeep = activeKeep;
    },
    setUserVaults(state, vaults) {
      state.userVaults = vaults;
    },

    setActiveVault(state, activeVault) {
      state.activeVault = activeVault;
    },
    setVaultKeeps(state, vaultKeeps) {
      state.vaultKeeps = vaultKeeps;
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
    async getUserKeeps({ commit }) {
      console.log("getUserKeeps called: ")
      try {
        let res = await api.get("keeps/user");
        commit("setUserKeeps", res.data)
        console.log("result of getUserKeeps: ", res)
      } catch (error) {
        console.error(error);
      }
    },

    async saveUserKeep({ dispatch }, keepToUpdate) {
      try {
        let res = await api.put("keeps/user", keepToUpdate)
        dispatch("getUserKeeps")
      } catch (error) {
        console.error(error)
      }
    },

    async getKeepById({ commit }, keepId) {
      try {
        console.log("getKeepById called ")
        let res = await api.get("keeps/" + keepId)
        commit("setActiveKeep", res.data)
        console.log("result of getKeepById: ", res)
      } catch (error) {
        console.error(error)
      }
    },
    async getKeepsByVaultId({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId + "/keeps")
        commit("setVaultKeeps", res.data);
        console.log("result of getKeepsByVaultId: ", res)

      } catch (error) {
        console.error(error)
      }

    },

    async createKeep({ dispatch }, newKeep) {
      try {
        console.log("new keep sent:", newKeep)
        let res = await api.post("keeps", newKeep)
        dispatch("getUserKeeps")
        console.log("new keep returned:", res.data)
      } catch (error) {
        console.error(error)
      }
    },


    async getUserVaults({ commit }) {
      try {
        let res = await api.get("vaults");
        commit("setUserVaults", res.data);

        console.log("result of getUserVaults: ", res)

      } catch (error) {
        console.error(error)
      }
    },

    async getVaultById({ commit }, vaultId) {
      try {
        console.log("getVaultById called ")
        let res = await api.get("vaults/" + vaultId)
        commit("setActiveVault", res.data)
        console.log("result of getVaultById: ", res)
      } catch (error) {
        console.error(error)
      }
    },


    async saveKeepToVault({ }, payload) {
      console.log("saveKeepToVault called... ", payload)
      try {
        let res = api.post("vaultkeeps", payload)
        console.log("saveKeepToVault: ", res)

      } catch (error) {
        console.error(error)
      }
    },

    async createVault({ dispatch }, payload) {
      try {
        console.log("new vault sent:", payload.newVault)
        let res = await api.post("vaults", payload.newVault)
        let saveKeepToVaultPayload = {};
        saveKeepToVaultPayload.vaultId = res.data.id;
        saveKeepToVaultPayload.keepId = payload.keepId;
        dispatch("saveKeepToVault", saveKeepToVaultPayload)
        console.log("new vault returned:", res.data)
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
    },

    async deleteKeep({ dispatch }, id) {
      try {
        await api.delete("keeps/" + id);
        dispatch("getUserKeeps");
      } catch (error) {
        console.error(error)
      }
    },
    async  editKeep({ commit }, keepToUpdate) {
      console.log("keep to update: ", keepToUpdate.id)
      try {
        let res = await api.put("keeps/" + keepToUpdate.id);
        commit("setPublicKeeps", res.data);
      } catch (error) {
        console.error(error)
      }
    },

  }
});
