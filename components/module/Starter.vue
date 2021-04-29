<template>
  <section v-editable="blok">
    <LayoutContainer>
      <BaseHeadline>
        {{ blok.title }}
      </BaseHeadline>
    </LayoutContainer>
    <div class="w-full h-screen overflow-hidden">
      <BaseImage :blok="blok.image" is-cover is-priority />
    </div>

    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 100px; height: 500px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 100px; height: 500px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 300px; height: 410px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 300px; height: 410px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 400px; height: 410px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 400px; height: 410px"
        ></div>
      </div>
    </LayoutContainer>
    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative mt-20 overflow-hidden bg-red-100"
        style="width: 100px; height: 500px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 100px; height: 500px"
        ></div>
      </div>
      <div
        class="relative mt-20 overflow-hidden bg-red-100"
        style="width: 300px; height: 410px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 300px; height: 410px"
        ></div>
      </div>
      <div
        class="relative mt-20 bg-red-100"
        style="width: 400px; height: 410px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 400px; height: 410px"
        ></div>
      </div>
    </LayoutContainer>
    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 100px; height: 500px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 100px; height: 500px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 300px; height: 410px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 300px; height: 410px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 400px; height: 410px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 400px; height: 410px"
        ></div>
      </div>
    </LayoutContainer>

    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 500px; height: 100px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 500px; height: 100px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 410px; height: 300px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 300px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 410px; height: 400px"
      >
        <BaseImage :blok="blok.image" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 400px"
        ></div>
      </div>
    </LayoutContainer>
    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative mt-20 overflow-hidden bg-red-100"
        style="width: 500px; height: 100px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 500px; height: 100px"
        ></div>
      </div>
      <div
        class="relative mt-20 overflow-hidden bg-red-100"
        style="width: 410px; height: 300px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 300px"
        ></div>
      </div>
      <div
        class="relative mt-20 overflow-hidden bg-red-100"
        style="width: 410px; height: 400px"
      >
        <BaseImage :blok="blok.image2" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 400px"
        ></div>
      </div>
    </LayoutContainer>
    <LayoutContainer class="flex items-center justify-between">
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 500px; height: 100px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 500px; height: 100px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 410px; height: 300px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 300px"
        ></div>
      </div>
      <div
        class="relative overflow-hidden bg-red-100 mt-80"
        style="width: 410px; height: 400px"
      >
        <BaseImage :blok="blok.image3" is-cover />
        <div
          class="absolute inset-0 border border-red-500"
          style="width: 410px; height: 400px"
        ></div>
      </div>
    </LayoutContainer>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
