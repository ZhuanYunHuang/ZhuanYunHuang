import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
    collectionList: [],
  },
  mutations: {
    //购物车该商品数量+1
    addCounter(state, payload) {
      payload.count++;
    },
    //加入购物车
    addToCart(state, payload) {
      state.cartList.push(payload);
    },
    //添加到收藏夹
    addToCollection(state, payload) {
      state.collectionList.push(payload);
    },
    removeFromCollection(state, payload) {
      state.collectionList.splice(payload, 1);
    },
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve) => {
        //1.查找之前数组中是否有该商品
        let oldProduct = context.state.cartList.find(
          (item) => item.iid === payload.iid
        );
        //2.判断oldProduct
        if (oldProduct) {
          context.commit("addCounter", oldProduct);
          resolve("当前的商品数量+1");
        } else {
          payload.count = 1;
          context.commit("addToCart", payload);
          resolve("添加了新的商品");
        }
      });
    },
    manageCollection(context, payload) {
      return new Promise((resolve) => {
        let oldCollection = context.state.collectionList.find(
          (item) => item.iid === payload.iid
        );
        if (oldCollection) {
          context.commit("removeFromCollection", oldCollection);
          resolve("已取消收藏该商品");
        } else {
          context.commit("addToCollection", payload);
          resolve("收藏成功!");
        }
      });
    },
  },
  modules: {},
});
