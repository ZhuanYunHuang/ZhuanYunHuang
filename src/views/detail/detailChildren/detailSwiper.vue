<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="(list, index) in topImages"
        :key="index"
        v-show="index === currentIndex"
        class="slide"
        @touchstart="stop"
        @touchend="go"
      >
        <img :src="list" alt="" />
      </li>
    </transition-group>
    <div class="carousel-items">
      <span
        v-for="(item, index) in topImages.length"
        :key="index"
        :class="{ active: index === currentIndex }"
        @mouseover="change(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0, //当前轮播图的索引
      timer: "", //轮播图定时器
    };
  },

  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.topImages.length - 1) {
        this.currentIndex = 0;
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
    });
  },
};
</script>

<style lang="less" scoped>
.carousel-wrap {
  position: relative;
  height: 450px;
  width: 100%;
  overflow: hidden;
  // 删除
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    list-style: none;
    img {
      width: 100%;
      height: 120%;
      overflow: hidden;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 99;
  bottom: 10px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 6px;
    width: 6px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
    border-radius: 3px;
  }
  .active {
    background-color: rgb(255, 105, 156);
  }
}
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>
