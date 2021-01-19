<template>
  <div v-editable="blok">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="blok.component"
    />
  </div>
</template>

<script>
import Starter from "@/components/bloks/Starter.vue";
export default {
  components: { Starter },
  props: ["blok"],
};
</script>