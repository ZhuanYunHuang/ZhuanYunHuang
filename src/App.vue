<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "./components/content/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style lang="scss">
@import "./assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
