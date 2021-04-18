<template>
  <img
    ref="image"
    :data-src="generateImageSrcset(blok.filename)"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
    :width="imageWidth"
    :height="imageHeight"
    :style="'aspect-ratio: ' + imageWidth / imageHeight"
    :alt="blok.alt"
    class="transition-opacity duration-300 opacity-0"
    :class="{ 'object-cover w-full h-full': isCover }"
  />
</template>

<script>
import { useIntersectionObserver } from "@vueuse/core";
import { ref } from "@nuxtjs/composition-api";

export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
      required: true,
    },
    isCover: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const image = ref();
    const imageWidth = ref(props.blok.filename.split("/")[5].split("x")[0]);
    const imageHeight = ref(props.blok.filename.split("/")[5].split("x")[1]);
    const sizes = [640, 768, 1024, 1280, 1536];

    const { stop: stopIntersectionObserver } = useIntersectionObserver(
      image,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          loadImage(image);
        }
      },
      { threshold: 0 }
    );

    function updateImageProvider(image, options = "") {
      const imageService = "https://img2.storyblok.com/";
      const path = image.replace("https://a.storyblok.com", "");

      return imageService + options + path;
    }

    function generateImageSrcset(imageUrl) {
      return sizes
        .map((width, index) => {
          const height = 0;
          const format = "webp";
          const options = `${width}x${height}/filters:format(${format})`;
          const url = updateImageProvider(imageUrl, options);
          return `${url} ${width}w`;
        })
        .join(", ");
    }

    function loadImage(image) {
      image.value.addEventListener("load", () => {
        console.log("Image loaded");
        image.value.classList.remove("opacity-0");
        stopIntersectionObserver();
      });
      image.value.srcset = image.value.getAttribute("data-src");
    }

    return {
      generateImageSrcset,
      image,
      imageWidth,
      imageHeight,
    };
  },
  head: {
    link: [{ rel: "preconnect", href: "//img2.storyblok.com" }],
  },
};
</script>
