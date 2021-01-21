export const state = () => ({
  isEditorMode: false,
  version: "",
  cacheVersion: "",
  globals: {
    header: [],
    footer: []
  }
});

export const mutations = {
  setVersion(state, version) {
    state.version = version;
  },
  setCacheVersion(state, cacheVersion) {
    state.cacheVersion = cacheVersion;
  },
  setGlobals(state, globals) {
    state.globals = globals;
  },
  setEditorMode(state, mode) {
    state.isEditorMode = mode;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }, { query, isDev }) {
    console.log("------");
    console.log("Query NuxtServerInit");
    console.log(query);
    console.log("------");

    await dispatch("loadCacheVersion");
  },
  loadVersion({ commit }, { version }) {
    commit("setVersion", version);
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get("cdn/spaces/me").then((res) => {
      commit("setCacheVersion", res.data.space.version);
    });
  },
  loadGlobals({ commit, state }) {
    return this.$storyapi
      .get("cdn/stories/global", {
        version: state.version,
        cv: state.cacheVersion
      })
      .then((res) => {
        commit("setGlobals", res.data.story.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
