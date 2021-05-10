export const state = () => ({
  isEditorMode: false,
  version: "draft",
  cacheVersion: "",
  locale: "de",
  localeUrlName: {}
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
  },
  updateLocale(state, locale) {
    state.locale = locale;
  },
  setLocaleUrlName(state, payload) {
    state.localeUrlName = payload;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { query, isDev, $config }) {
    commit("setVersion", $config.version);
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
