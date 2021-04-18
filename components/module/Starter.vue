<template>
  <section v-editable="blok">
    <LayoutContainer>
      <BaseHeadline>
        {{ blok.title }}
      </BaseHeadline>
    </LayoutContainer>
    <div
      ref="target"
      class="flex items-center justify-center w-full h-screen overflow-hidden"
      style="transform: scaleX(0.86)"
    >
      <BaseImage ref="targetImage" :blok="blok.image" is-cover />
    </div>
  </section>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import { useScroll } from "@vueuse/gesture";
import { useIntersectionObserver } from "@vueuse/core";
import { useMotionProperties, useSpring } from "@vueuse/motion";
import { interpolate } from "popmotion";

export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const target = ref();
    const targetImage = ref();
    const targetIsVisible = ref(false);

    const { motionProperties } = useMotionProperties(target, {
      scaleX: 0.86,
    });
    const mapper = interpolate([0, 1], [0.86, 1]);
    const { set } = useSpring(motionProperties, {
      damping: 50,
      stiffness: 1000,
    });

    const { motionProperties: motionPropertiesImage } = useMotionProperties(
      targetImage,
      {
        scaleX: 1 / 0.86,
      }
    );
    const mapperImage = interpolate([0, 1], [1 / 0.86, 1]);
    const { set: setImage } = useSpring(motionPropertiesImage, {
      damping: 50,
      stiffness: 1000,
    });

    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting;
      },
      {
        threshold: 0,
      }
    );

    useScroll(
      ({ xy: [x, y], ...state }) => {
        if (!targetIsVisible.value) {
          return;
        }

        set({
          scaleX: mapper(y / (document.body.clientHeight - window.innerHeight)),
        });

        setImage({
          scaleX: mapperImage(
            y / (document.body.clientHeight - window.innerHeight)
          ),
        });
      },
      {
        domTarget: window,
      }
    );
    return {
      target,
      targetIsVisible,
      targetImage,
    };
  },
};
</script>
