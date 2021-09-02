<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link" style="text-decoration: none">
        <img :src="item.image" alt="" />
        <div class="recommend-text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend {
  background-color: white;
  padding-top: 10px;
  display: flex;
}
.recommend-item {
  flex: 25%;
}
.recommend-item img {
  width: 80%;
}
.recommend-text {
  color: rgb(129, 129, 129);
}
</style>
