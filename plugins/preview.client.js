export default function({ query, enablePreview, store }) {
  console.log("------");
  console.log("Query preview.client.js");
  console.log(query);
  console.log("------");

  if (query._storyblok) {
    console.log("Enable Preview");
    store.commit("setEditorMode", true);
    enablePreview();
  }
}
