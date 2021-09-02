<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div
        class="bottom-bar-left-content"
        v-for="(item, index) in info"
        :key="index"
        @click="addToCollection(index)"
      >
        <div class="bottom-bar-left-content-img">
          <img :src="item.img" style="height: 80%" />
        </div>
        <div class="bottom-bar-left-content-title">{{ item.title }}</div>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div style="width: 50%; background-color: yellow" @click="addToCart">
        加入购物车
      </div>
      <div
        style="width: 50%; background-color: rgb(255, 142, 150); color: white"
      >
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collected: {
      type: Boolean,
    },
  },
  data() {
    return {
      info: [
        {
          img: require("../../../assets/img/detail/service.png"),
          title: "客服",
        },
        {
          img: require("../../../assets/img/detail/store.png"),
          title: "店铺",
        },
        {
          img: require("../../../assets/img/detail/collect.png"),
          title: "收藏",
        },
      ],
      collectedInfo: {
        img: require("../../../assets/img/detail/collected.png"),
        title: "已收藏",
      },
      uncollectedInfo: {
        img: require("../../../assets/img/detail/collect.png"),
        title: "收藏",
      },
    };
  },

  methods: {
    addToCart() {
      this.$emit("addToCart");
    },
    addToCollection(index) {
      let data = index;
      this.$emit("addToCollection", data);
      if (!this.collected) {
        this.info.splice(2, 1, this.collectedInfo);
      } else {
        this.info.splice(2, 1, this.uncollectedInfo);
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
}
.bottom-bar-left {
  display: flex;
  justify-content: space-between;
  width: 54%;
}
.bottom-bar-right {
  display: flex;
  text-align: center;
  line-height: 49px;
  background-color: pink;
  width: 46%;
}
.bottom-bar-left-content {
  width: 33%;
}
.bottom-bar-left-content-img {
  height: 60%;
  width: 100%;
  margin-top: 5px;
}
.bottom-bar-left-content-title {
  font-size: 13px;
  color: #8a8a8a;
}
</style>
