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
    allKeeps: [],
    userKeeps: [],
    userVaults: [],
    vaultKeeps: [],
    allVaultKeeps: [],
    activeKeep: {},
    activeVault: {},
    activeVaultKeep: {},
    vaultKeepsFilteredByActiveKeep: []
  },
  mutations: {
    setAllKeeps(state, keeps) {
      state.allKeeps = keeps;
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
    },

    setAllVaultKeeps(state, allVaultKeeps) {
      state.allVaultKeeps = allVaultKeeps
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getAllKeeps({ commit }) {
      try {
        let res = await api.get("keeps");
        commit("setAllKeeps", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getUserKeeps({ commit }) {
      try {
        let res = await api.get("keeps/user");
        commit("setUserKeeps", res.data)
      } catch (error) {
        console.error(error);
      }
    },

    // async saveUserKeep({ dispatch }, keepToUpdate) {
    //   try {
    //     let res = await api.put("keeps/user", keepToUpdate)
    //     dispatch("getUserKeeps")
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },

    async getKeepById({ commit }, keepId) {
      try {
        let res = await api.get("keeps/" + keepId)
        commit("setActiveKeep", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getKeepsByVaultId({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId + "/keeps")
        commit("setVaultKeeps", res.data);
      } catch (error) {
        console.error(error)
      }

    },

    async createKeep({ dispatch }, newKeep) {
      try {
        let res = await api.post("keeps", newKeep)
        dispatch("getAllKeeps")
      } catch (error) {
        console.error(error)
      }
    },


    async getUserVaults({ commit }) {
      try {
        let res = await api.get("vaults");
        commit("setUserVaults", res.data);
      } catch (error) {
        console.error(error)
      }
    },

    async getVaultById({ commit }, vaultId) {
      try {
        let res = await api.get("vaults/" + vaultId)
        commit("setActiveVault", res.data)
      } catch (error) {
        console.error(error)
      }
    },



    async saveKeepToVault({ dispatch }, payload) {
      try {
        let res = api.post("vaultkeeps", payload)
        dispatch("getAllVaultKeeps")
      } catch (error) {
        console.error(error)
      }
    },

    async removeKeepFromVault({ dispatch }, vaultKeepId) {
      try {
        await api.delete("vaultkeeps/" + vaultKeepId)
        dispatch("getUserKeeps")
      } catch (error) {
        console.error(error)
      }
    },

    async createVault({ dispatch }, payload) {
      try {
        let res = await api.post("vaults", payload.newVault)
        let saveKeepToVaultPayload = {};
        saveKeepToVaultPayload.vaultId = res.data.id;
        saveKeepToVaultPayload.keepId = payload.keepId;
        dispatch("saveKeepToVault", saveKeepToVaultPayload)
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
    async editKeep({ commit }, keepToUpdate) {
      try {
        let res = await api.put("keeps/" + keepToUpdate.id, keepToUpdate);
        commit("setAllKeeps", res.data);
      } catch (error) {
        console.error(error)
      }
    },

    async getAllVaultKeeps({ dispatch, commit }) {
      try {
        let res = await api.get("vaultKeeps");
        commit("setAllVaultKeeps", res.data)
      } catch (error) {
        console.error(error)
      }
    }

  }
});
