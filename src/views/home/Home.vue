<template>
  <div id="home" ref="home">
    <nav-bar class="fixed">
      <div class="homeNav" slot="center">购物街</div>
    </nav-bar>
    <back-top class="BackTop" @click.native="backTopClick" v-show="isBack" />
    <div class="HeadHeight"></div>
    <homeSwiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control
      :title="['流行', '新款', '精选']"
      class="sticky"
      @tabClick="tabClick"
    />
    <goods-list :goods="goods[currentType].list" />
    <div @click="getHomegoods(currentType)">点击加载更多</div>
    <!-- </scroll> -->
    <div class="footerHeight"></div>
  </div>
</template>
<script>
import NavBar from "../../components/common/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import BackTop from "../../components/common/backtop/BackTop.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomegoods } from "../../network/home";
import homeSwiper from "./homeChildren/homeSwiper.vue";
import RecommendView from "./homeChildren/RecommendView.vue";
import FeatureView from "./homeChildren/FeatureView.vue";
export default {
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      isBack: false,
      saveTop: 0,

      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    NavBar,
    homeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    // Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    this.getHomegoods("pop");
    this.getHomegoods("new");
    this.getHomegoods("sell");
  },
  mounted() {
    // this.loadMore();
    window.addEventListener("scroll", this.handleScroll, true);
  },
  activated() {
    console.log("----------进activated--------");
    //回到之前的位置
    window.scrollTo({ top: this.saveTop });
  },
  beforeRouteLeave(to, from, next) {
    //路由跳转之前记录当前位置
    this.saveTop = document.documentElement.scrollTop || 0;
    next();
  },
  deactivated() {
    console.log("----------进deactivated--------");
    //显示离开页面时的位置
    console.log("离开时高度:" + this.saveTop);
  },
  methods: {
    //事件监听
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      window.scrollTo({ top: 575 });
    },
    //网络请求
    //1.请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomegoods(type) {
      //2.请求商品数据
      const page = this.goods[type].page + 1;
      getHomegoods(type, page).then((res) => {
        console.log(this.goods[type].list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(this.goods[type].list);
        console.log(this.goods[type].page);
      });
    },
    //回到顶部
    backTopClick() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    //显示回到顶部图标
    handleScroll() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 2000) {
        this.isBack = true;
      } else {
        this.isBack = false;
      }
      // console.log("总高度:" + document.body.scrollHeight);
    },
  },
};
</script>
<style scoped>
#home {
  background-color: rgb(239, 239, 239);
}
.homeNav {
  color: white;
}
.fixed {
  font-weight: 700;
  position: fixed;
  z-index: 300;
  background-color: rgb(255, 142, 150);
}
.sticky {
  position: sticky;
  top: 44px;
}
.HeadHeight {
  height: 44px;
}
.footerHeight {
  height: 49px;
}
.BackTop {
  position: fixed;
  right: 0;
  bottom: 60px;
  z-index: 9999;
}
</style>
