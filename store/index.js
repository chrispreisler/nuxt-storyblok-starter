export const state = () => ({
  cacheVersion: "",
  globals: {
    header: [],
    footer: []
  }
});

export const mutations = {
  setCacheVersion(state, version) {
    state.cacheVersion = version;
  },
  setGlobals(state, globals) {
    state.globals = globals;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    //const version = route.query._storyblok || isDev ? "draft" : "published";
    const version = "draft";

    await dispatch("loadGlobals", {
      version
    });
  },
  loadCacheVersion({ commit }) {
    return this.$storyapi.get(`cdn/spaces/me`).then(res => {
      commit("setCacheVersion", res.data.space.version);
    });
  },
  loadGlobals({ commit }, { version }) {
    return this.$storyapi
      .get("cdn/stories/global", {
        version
      })
      .then(res => {
        commit("setGlobals", res.data.story.content);
      })
      .catch(error => console.log(error));
  }
};
