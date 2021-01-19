<template>
  <h1 class="text-h1" v-editable="blok">{{ blok.title }}</h1>
</template>

<script>
export default {
  props: ["blok"],
};
</script>