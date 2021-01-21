export default function({ route, query, isDev, enablePreview, store }) {
  if (query.preview) {
    // console.log("Enable Preview");
    enablePreview();
  }
}
