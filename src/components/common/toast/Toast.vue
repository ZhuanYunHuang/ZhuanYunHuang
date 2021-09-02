<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {};
  },
  props: {
    message: {
      type: String,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 1s;
}
</style>
