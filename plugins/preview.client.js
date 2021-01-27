export default function({ query, enablePreview }) {
  if (query._storyblok) {
    enablePreview();
  }
}
