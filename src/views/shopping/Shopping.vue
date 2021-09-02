<template>
  <div id="shopping">
    <NavBar class="fixed">
      <div slot="center" style="color: white">购物车({{ cartLength }})</div>
    </NavBar>

    <shop-list class="body" />
    <shop-bottom-bar />
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar.vue";
import ShopBottomBar from "./shoppingChildren/ShopBottomBar.vue";
import ShopList from "./shoppingChildren/ShopList.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    ShopList,
    ShopBottomBar,
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
  z-index: 300;
  background-color: rgb(255, 142, 150);
}
.body {
  padding-top: 44px;
}
</style>
