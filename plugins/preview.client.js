export default function({ query, enablePreview, store, isDev }) {
  if (query._storyblok) {
    const version = query._storyblok || isDev ? "draft" : "published";
    store.commit("setVersion", version);
    enablePreview({ query });
  }
}
