<template functional>
  <section
    class="mt-20 md:mt-40 lg:mt-48"
    :class="[data.staticClass, data.class]"
  >
    <slot />
  </section>
</template>
