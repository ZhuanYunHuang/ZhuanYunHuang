<template>
  <div id="shop-item">
    <div class="item-selector">
      <input
        type="checkbox"
        class="item-selector-checkbox"
        v-model="shopsItem.checked"
        :checked="shopsItem.checked"
      />
    </div>
    <div class="item-img">
      <img :src="shopsItem.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ shopsItem.title }}</div>
      <div class="item-desc">商品描述: {{ shopsItem.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">¥{{ shopsItem.price }}</div>
        <div class="item-count" @click="remove">
          <img src="../../../assets/img/profile/删除.png" alt="" />
          <span>x{{ shopsItem.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopListItem",
  props: {
    shopsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  text-align: right;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-selector-checkbox {
  width: 100%;
  height: 20px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
  width: 25%;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  width: 65%;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
.item-count {
  height: 20px;
}
.item-count img {
  float: left;
  height: 100%;
}
</style>
