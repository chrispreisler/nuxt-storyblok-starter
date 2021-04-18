<template functional>
  <div
    class="w-full max-w-container lg:mx-auto px-gutter"
    :class="[data.staticClass, data.class]"
  >
    <slot />
  </div>
</template>
