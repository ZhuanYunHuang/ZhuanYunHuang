<template>
  <div class="bottom-menu">
    <input
      type="checkbox"
      class="select-all"
      v-model="selectAll"
      :checked="selectAll"
      @click="handleSelectAll"
    />
    <span style="float: left">全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去付款({{ totalCount }})</span>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      cartList: this.$store.state.cartList,
    };
  },
  computed: {
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    selectAll: {
      get() {
        return this.cartList.length === 0
          ? false
          : !this.cartList.find((item) => !item.checked);
      },
      set(val) {
        this.cartList.forEach((item) => {
          item.checked = val;
        });
      },
    },
  },
  methods: {
    handleSelectAll() {
      if (this.selectAll) {
        this.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.bottom-menu {
  /* display: flex; */
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
