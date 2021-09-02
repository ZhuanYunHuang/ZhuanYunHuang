<template>
  <div id="detail">
    <NavBar class="navbar">
      <div slot="left" @click="tabClick">
        <img src="../../assets/img/left.png" alt="" class="left" />
      </div>
      <div slot="center" class="center">
        <div
          class="center-item"
          v-for="(item, index) in title"
          :key="index"
          :class="{ active: index === isActive }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>

    <div class="body">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-param-info :paramInfo="paramInfo" id="param" />
      <detail-comment-info :commentInfo="commentInfo" id="comment" />
      <goods-list :goods="recommends" id="recommend" />
    </div>
    <div style="height: 38px"></div>
    <detail-bottom-bar
      @addToCart="addToCart"
      @addToCollection="addToCollection"
      :collected="collected"
    />
    <toast :message="message" :isShow="isShow" />
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar.vue";
import DetailSwiper from "./detailChildren/detailSwiper.vue";
import DetailBaseInfo from "./detailChildren/detailBaseInfo.vue";
import DetailShopInfo from "./detailChildren/detailShopInfo.vue";
import DetailGoodsInfo from "./detailChildren/detailGoodsInfo.vue";
import DetailParamInfo from "./detailChildren/detailParamInfo.vue";
import DetailCommentInfo from "./detailChildren/detailCommentInfo.vue";
import DetailBottomBar from "./detailChildren/detailBottomBar.vue";
import GoodsList from "./detailChildren/detailGoodsList.vue";
import Toast from "../../components/common/toast/Toast";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "../../network/detail";

export default {
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Toast,
  },
  name: "detail",
  data() {
    return {
      data: null,
      iid: null,
      paramTop: 0,
      commentTop: 0,
      recommendTop: 0,
      bodyTop: 0,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      isActive: 0,
      countTitle: 0,
      topImages: [],
      recommends: [],
      message: "",
      isShow: false,
      collected: false,
      title: ["商品", "参数", "评论", "推荐"],
    };
  },
  created() {
    window.scrollTo({ top: 0 });
    //获取各商品的id
    this.iid = this.$route.params.iid;

    //请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);

      //获取后端数据
      this.data = res.result;

      //获取顶部轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      console.log("轮播图长度:" + this.topImages.length);

      //获取商品信息
      this.goods = new Goods(
        this.data.itemInfo,
        this.data.columns,
        this.data.shopInfo.services
      );
      console.log(this.goods);

      //获取店家信息
      this.shop = new Shop(this.data.shopInfo);
      console.log(this.shop);

      //保存商品的详情数据
      this.detailInfo = this.data.detailInfo;

      //获取参数的信息
      this.paramInfo = new GoodsParam(
        this.data.itemParams.info,
        this.data.itemParams.rule
      );
      console.log(this.paramInfo);

      //取出评论的信息
      if (this.data.rate.cRate !== 0) {
        this.commentInfo = this.data.rate.list[0];
      }
    });

    //请求推荐数据
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.list;
    });
  },
  updated() {
    window.addEventListener("scroll", this.changetitle, true);
  },
  methods: {
    //点击到相应位置
    itemClick(index) {
      switch (index) {
        case 0:
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        case 1:
          this.$el
            .querySelector("#param")
            .scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        case 2:
          this.$el
            .querySelector("#comment")
            .scrollIntoView({ block: "start", behavior: "smooth" });
          break;
        case 3:
          this.$el
            .querySelector("#recommend")
            .scrollIntoView({ block: "start", behavior: "smooth" });
          break;
      }
    },
    //返回上一页
    tabClick() {
      this.$router.back();
    },
    //滚动到相应位置
    changetitle() {
      this.$nextTick(() => {
        this.paramTop = this.$el.querySelector("#param").offsetTop;
        this.commentTop = this.$el.querySelector("#comment").offsetTop;
        this.recommendTop = this.$el.querySelector("#recommend").offsetTop;
        this.bodyTop = document.documentElement.scrollTop;
      });
      if (
        this.bodyTop >= this.paramTop - 45 &&
        this.bodyTop < this.commentTop - 45
      ) {
        this.isActive = this.countTitle = 1;
      } else if (
        this.bodyTop >= this.commentTop - 45 &&
        this.bodyTop < this.recommendTop - 45
      ) {
        this.isActive = this.countTitle = 2;
      } else if (this.bodyTop >= this.recommendTop - 45) {
        this.isActive = this.countTitle = 3;
      } else {
        this.isActive = this.countTitle = 0;
      }
      console.log(this.countTitle);
    },
    //将商品加入到购物车
    addToCart() {
      //1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.checked = false;

      //2.将商品添加到购物车
      this.$store.dispatch("addCart", product).then((res) => {
        console.log(res);
        this.isShow = true;
        this.message = res;

        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, 2000);
      });
    },
    //将商品添加到收藏夹
    addToCollection(data) {
      console.log(data);
      if (data === 2) {
        //获取收藏夹需要展示的信息
        const collection = {};
        collection.image = this.topImages[0];
        collection.title = this.goods.title;
        collection.desc = this.goods.desc;
        collection.price = this.goods.realPrice;
        collection.iid = this.iid;

        //将商品添加到收藏夹
        this.$store.dispatch("manageCollection", collection).then((res) => {
          console.log(res);
          this.isShow = true;
          this.message = res;
          res === "收藏成功!"
            ? (this.collected = true)
            : (this.collected = false);
          setTimeout(() => {
            this.isShow = false;
            this.message = "";
          }, 2000);
        });
        console.log(this.collected);
        console.log(this.$store.state.collectionList);
      }
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9999;
  background-color: #fff;
}
.navbar {
  position: fixed;
  z-index: 999;
  background-color: #f6f6f6;
}
.body {
  padding-top: 44px;
}
.center {
  display: flex;
  font-size: 14px;
}
.center-item {
  flex: 1;
}
.active {
  color: rgb(255, 142, 150);
}
.left {
  width: 40%;
  margin-top: 9px;
}
</style>
