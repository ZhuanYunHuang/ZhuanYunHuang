<template>
  <div class="ShopList">
    <shop-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :shops-item="item"
      @remove="remove(index)"
    />
  </div>
</template>

<script>
import ShopListItem from "./ShopListItem.vue";
export default {
  name: "ShopList",
  components: { ShopListItem },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
  methods: {
    remove(index) {
      this.$store.state.cartList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.ShopList {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
}
</style>
