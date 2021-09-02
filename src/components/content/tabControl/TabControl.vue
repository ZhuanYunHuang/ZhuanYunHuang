<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="tab-control-item"
      @click="itemClick(index)"
    >
      <span :class="{ active: index === isActive }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  // computed: {
  //   isActive() {
  //     return this.$route.path.indexOf(this.path) != -1;
  //   },
  // },
  methods: {
    itemClick(index) {
      this.isActive = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  margin-top: 4px;
  display: flex;
}
.tab-control-item {
  /* margin: 0 40px; */
  background-color: white;
  flex: 1;
  height: 30px;
  line-height: 30px;
}
.active {
  border-bottom: 3px solid rgb(255, 142, 150);
  color: rgb(255, 142, 150);
}
</style>
