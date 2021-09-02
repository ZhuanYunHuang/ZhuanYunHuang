<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="left">我的</div>
      <div slot="right">
        <img
          src="../../assets/img/profile/setup.png"
          style="height: 30px; padding-top: 7px"
        />
      </div>
    </nav-bar>
    <user-info></user-info>
    <info-tab-bar />
    <order-tab-bar />
    <account />
    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
    <div style="height: 100px"></div>
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar.vue";
import Account from "./profileChildren/Account";
import ListView from "./profileChildren/ListView.vue";
import InfoTabBar from "./profileChildren/InfoTabBar.vue";
import UserInfo from "./profileChildren/UserInfo.vue";
import OrderTabBar from "./profileChildren/OrderTabBar.vue";
export default {
  components: { NavBar, UserInfo, ListView, Account, InfoTabBar, OrderTabBar },
  data() {
    return {
      orderList: [
        {
          img: require("../../assets/img/profile/我的消息.png"),
          info: "我的消息",
        },
        {
          img: require("../../assets/img/profile/积分商城.png"),
          info: "积分商城",
        },
        {
          img: require("../../assets/img/profile/会员卡.png"),
          info: "会员卡",
        },
      ],
      serviceList: [
        {
          img: require("../../assets/img/profile/我的购物车.png"),
          info: "我的购物车",
        },
        {
          img: require("../../assets/img/profile/APP.png"),
          info: "下载购物APP",
        },
      ],
    };
  },
};
</script>
<style scoped>
#profile {
  background-color: rgb(239, 239, 239);
}
.nav-bar {
  position: fixed;
  font-weight: 700;
  color: #fff;
  z-index: 999;
  background-color: rgb(255, 142, 150);
}
.order-list,
.service-list {
  margin-top: 12px;
}
</style>
