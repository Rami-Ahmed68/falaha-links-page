<template>
  <router-view />
  <!-- <div class="app">
  </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.documentElement.setAttribute(
      "data-theme",
      this.$store.state.theme
    );
  },
};
</script>

<style lang="scss">
@import "./sass/vars";

#app {
  // background-color: #333;
  background-color: var(--theme-bg);
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  transition-duration: 0.2s;
}
</style>
