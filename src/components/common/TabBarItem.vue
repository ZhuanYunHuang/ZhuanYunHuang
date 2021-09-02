<template>
  <div>
    <div class="tab-bar-item" @click="itemClick">
      <div v-show="isActive" :class="{ active: isActive }">
        <slot name="active"></slot>
      </div>
      <slot name="unactive"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  width: 100%;
  font-size: 13px;
}

.tab-bar-item img {
  width: 28%;
  margin: 3px 0;
  vertical-align: middle;
}

.active {
  color: rgb(255, 142, 150);
}
</style>
