<template>
  <div />
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  data() {
    return {
      prevRoute: null,
    };
  },
  mounted() {
    this.$router.push(this.prevRoute.fullPath);
  },
};
</script>
