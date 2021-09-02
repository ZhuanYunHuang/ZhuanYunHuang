<template>
  <div class="GoodsListItem" @click="itemClick">
    <img :src="this.goodsItem.show.img" alt="" />
    <div class="info">
      <p class="introduction">{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}￥</span>
      <span class="collect">⭐{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      console.log("跳转到详情页");
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.GoodsListItem {
  width: 48%;
}
.GoodsListItem img {
  width: 100%;
  border-radius: 3px;
}
.introduction {
  margin: 0;
  width: 100%;
  height: 18px;
  color: rgb(60, 60, 60);
  overflow: hidden;
}
.price {
  margin-right: 10px;
  font-size: 14px;
  color: rgb(255, 142, 150);
}
.collect {
  font-size: 14px;
  color: grey;
}
</style>
