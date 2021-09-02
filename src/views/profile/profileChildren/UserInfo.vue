<template>
  <div id="user-info">
    <div class="info-img">
      <img src="../../../assets/img/profile/head.png" alt="" />
    </div>
    <div class="info-register">登录/注册</div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
#user-info {
  background-color: rgb(239, 239, 239);
  padding: 44px 0 10px 0;
  height: 60px;
  width: 100%;
  display: flex;
}
.info-img {
  width: 60px;
  border-radius: 50%;
}
.info-img img {
  width: 100%;
  margin: 0 20px;
}
.info-register {
  width: 150px;
  margin-left: 10px;
  line-height: 60px;
}
</style>
