<template>
  <div>
    <div id="profile-tab-bar">
      <TabBarItem path="/collection">
        <div slot="unactive">
          <img src="../../../assets/img/profile/collect.png" />
          <div>收藏</div>
        </div>
      </TabBarItem>
      <TabBarItem>
        <div slot="unactive">
          <img src="../../../assets/img/profile/subscribe.png" />
          <div>订阅店铺</div>
        </div>
      </TabBarItem>
      <TabBarItem>
        <div slot="unactive">
          <img src="../../../assets/img/profile/history.png" />
          <div>足迹</div>
        </div>
      </TabBarItem>
      <TabBarItem>
        <div slot="unactive">
          <img src="../../../assets/img/profile/redpaper.png" />
          <div>红包/卡券</div>
        </div>
      </TabBarItem>
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
#profile-tab-bar {
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
}
#profile-tab-bar img {
  width: 30px;
}
</style>
