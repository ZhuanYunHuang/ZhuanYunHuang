<template>
  <div class="ShopList">
    <collection-list-item
      v-for="(item, index) in collectionList"
      :key="index"
      :shops-item="item"
      @remove="remove(index)"
    />
  </div>
</template>

<script>
import CollectionListItem from "./CollectionListItem.vue";
export default {
  name: "CollectionList",

  components: { CollectionListItem },

  computed: {
    collectionList() {
      return this.$store.state.collectionList;
    },
  },
  methods: {
    remove(index) {
      this.$store.state.collectionList.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.ShopList {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
}
</style>
