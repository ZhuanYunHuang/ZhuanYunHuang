<template>
  <div>
    <div id="order-tab-bar">
      <div class="tab-bar-head">
        <div class="left">我的订单</div>
        <div class="right">全部></div>
      </div>
      <div class="tab-bar-body">
        <TabBarItem>
          <div slot="unactive">
            <img src="../../../assets/img/profile/待付款.png" />
            <div>待付款</div>
          </div>
        </TabBarItem>
        <TabBarItem>
          <div slot="unactive">
            <img src="../../../assets/img/profile/待发货.png" />
            <div>待发货</div>
          </div>
        </TabBarItem>
        <TabBarItem>
          <div slot="unactive">
            <img src="../../../assets/img/profile/待收货.png" />
            <div>待收货</div>
          </div>
        </TabBarItem>
        <TabBarItem>
          <div slot="unactive">
            <img src="../../../assets/img/profile/待评价.png" />
            <div>待评价</div>
          </div>
        </TabBarItem>
        <TabBarItem>
          <div slot="unactive">
            <img src="../../../assets/img/profile/退款.png" />
            <div>退款/售后</div>
          </div>
        </TabBarItem>
      </div>
    </div>
  </div>
</template>

<script>
import TabBarItem from "../../../components/common/TabBarItem.vue";
export default {
  name: "profileTabBar",
  data() {
    return {};
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
#order-tab-bar {
  padding: 8px 0;
  width: 98%;
  margin: 10px auto 15px auto;
  border-radius: 5px;
  background-color: #fff;
}
#order-tab-bar img {
  width: 30px;
}
.tab-bar-head {
  height: 20px;
  width: 100%;
}
.tab-bar-body {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.left {
  float: left;
  margin-left: 5px;
  font-weight: 550;
}
.right {
  float: right;
  margin-right: 5px;
  font-size: 12px;
  color: rgb(151, 139, 139);
}
</style>
