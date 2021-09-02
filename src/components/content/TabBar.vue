<template>
  <div>
    <div id="tab-bar">
      <TabBarItem path="/home">
        <div slot="active">
          <img src="../../assets/img/home1.png" />
          <div>首页</div>
        </div>
        <div slot="unactive">
          <img src="../../assets/img/home.png" />
          <div>首页</div>
        </div>
      </TabBarItem>
      <TabBarItem path="/sort">
        <div slot="active">
          <img src="../../assets/img/sort1.png" />
          <div>分类</div>
        </div>
        <div slot="unactive">
          <img src="../../assets/img/sort.png" />
          <div>分类</div>
        </div>
      </TabBarItem>
      <TabBarItem path="/shopping">
        <div slot="active">
          <img src="../../assets/img/shopping1.png" />
          <div>购物车</div>
        </div>
        <div slot="unactive">
          <img src="../../assets/img/shopping.png" />
          <div>购物车</div>
        </div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <div slot="active">
          <img src="../../assets/img/profile1.png" />
          <div>我的</div>
        </div>
        <div slot="unactive">
          <img src="../../assets/img/profile.png" />
          <div>我的</div>
        </div>
      </TabBarItem>
    </div>
  </div>
</template>

<script>
import TabBarItem from "../common/TabBarItem.vue";
export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {
    TabBarItem,
  },
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgb(100, 100, 100, 0.1);
}
</style>
