export const state = () => ({
  isEditorMode: false,
  version: "",
  cacheVersion: ""
});

export const mutations = {
  setVersion(state, version) {
    state.version = version;
  },
  setCacheVersion(state, cacheVersion) {
    state.cacheVersion = cacheVersion;
  },
  setEditorMode(state, mode) {
    state.isEditorMode = mode;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { query, isDev }) {
    const version = query._storyblok || isDev ? "draft" : "published";
    const isEditorMode = !!query._storyblok || isDev;
    commit("setVersion", version);
    commit("setEditorMode", isEditorMode);
    await dispatch("loadCacheVersion");
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get("cdn/spaces/me").then((res) => {
      commit("setCacheVersion", res.data.space.version);
    });
  },
  loadVersion({ commit }, { version }) {
    commit("setVersion", version);
  }
};
