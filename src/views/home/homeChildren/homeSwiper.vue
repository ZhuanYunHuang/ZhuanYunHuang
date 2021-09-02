<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="(list, index) in banners"
        :key="index"
        v-show="index === currentIndex"
        class="slide"
        @touchstart="stop"
        @touchend="go"
      >
        <a :href="list.link">
          <img :src="list.image" alt="" />
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span
        v-for="(item, index) in banners.length"
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
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // bannerwidth: 0, //轮播图宽度
      // StartPoint: 0, //触摸开始的点的横坐标
      // EndPoint: 0, //触摸结束的点的横坐标
      // MoveLength: 0, //StartPoint与EndPoint的差值
      currentIndex: 0, //当前轮播图的索引
      // isPlaying: true, //判断是否处于自动轮播
      timer: "", //轮播图定时器
    };
  },

  methods: {
    go() {
      // this.Jump();
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 4000);
      // this.currentIndex = index;
    },
    // move(event) {
    //   //获取触摸的结束点
    //   this.EndPoint = event.changedTouches[0].pageX;
    //   this.slidings();
    // },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
      // this.StartPoint = event.changedTouches[0].pageX;
    },
    change(index) {
      this.currentIndex = index;
    },
    //Jump()方法用于处理滑动到一定程度后松手自动跳转到下一页或上一页
    // Jump() {
    //   const currentimg = document.getElementsByClassName("slide");
    //   //滑动超过轮播图宽度的百分之40，则跳转下一张，否则不跳转
    //   if (
    //     this.MoveLength > 0 &&
    //     this.currentIndex !== this.banners.length - 1
    //   ) {
    //     if (this.MoveLength > this.bannerwidth * 0.4) {
    //       this.currentIndex++;
    //       currentimg[0].style.marginLeft =
    //         -this.currentIndex * this.bannerwidth + "px";
    //     } else {
    //       currentimg[0].style.marginLeft =
    //         -this.currentIndex * this.bannerwidth + "px";
    //     }
    //   } else if (this.MoveLength < 0 && this.currentIndex !== 0) {
    //     if (-this.MoveLength > this.bannerwidth * 0.4) {
    //       this.currentIndex--;
    //       currentimg[0].style.marginLeft =
    //         -this.currentIndex * this.bannerwidth + "px";
    //     } else {
    //       currentimg[0].style.marginLeft =
    //         -this.currentIndex * this.bannerwidth + "px";
    //     }
    //   }
    // },
    //slidings()方法用于处理在滑动过程中，轮播图跟着手指滑动的距离移动
    // slidings() {
    //   //判断是点击还是滑动
    //   if (this.StartPoint === this.EndPoint) {
    //     return;
    //   }
    //   this.MoveLength = this.StartPoint - this.EndPoint;
    //   //操作DOM，获取轮播图对象标签
    //   const currentimg = document.getElementsByClassName("slide");
    //   //获取轮播图的宽度
    //   this.bannerwidth = currentimg[0].offsetWidth;
    //   //判断是否超出滑动范围，即第一页无法再往前一页滑动，最后一页无法再往后一页滑动
    //   if (
    //     this.MoveLength > 0 &&
    //     this.currentIndex !== this.banners.length - 1
    //   ) {
    //     currentimg[0].style.marginLeft =
    //       -this.MoveLength - this.currentIndex * this.bannerwidth + "px";
    //   } else if (this.MoveLength < 0 && this.currentIndex !== 0) {
    //     currentimg[0].style.marginLeft =
    //       -this.MoveLength - this.currentIndex * this.bannerwidth + "px";
    //   }
    // },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.banners.length - 1) {
        this.currentIndex = 0;
      }
      // const currentimg = document.getElementsByClassName("slide");
      // this.bannerwidth = currentimg[0].offsetWidth;
      // currentimg[0].style.marginLeft =
      //   -this.currentIndex * this.bannerwidth + "px";
      // currentimg[0].style.transition = "all 1s ease";
    },
  },

  //加定时器自动切换
  mounted() {
    // this.timer = setInterval(this.next.bind(this), 2000);
    //还可以使用箭头函数就不用bind
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
  height: 190px;
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
      height: 100%;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 999;
  bottom: 10px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
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
