<template>
  <div id="collection">
    <nav-bar class="navbar">
      <div slot="left" @click="tabClick">
        <img src="../../../../assets/img/left.png" alt="" class="left" />
      </div>
      <div slot="center" style="color: white">收藏夹</div>
    </nav-bar>
    <collection-list class="body" />
  </div>
</template>

<script>
import NavBar from "../../../../components/common/NavBar.vue";
import CollectionList from "./CollectionList.vue";
export default {
  data() {
    return {};
  },

  components: { NavBar, CollectionList },

  computed: {},

  methods: {
    tabClick() {
      this.$router.push("/profile");
      console.log("aa");
    },
  },
};
</script>

<style scoped>
.navbar {
  font-weight: 700;
  position: fixed;
  z-index: 300;
  background-color: rgb(255, 142, 150);
}
.left {
  width: 40%;
  margin-top: 9px;
}
.body {
  padding-top: 44px;
}
</style>
