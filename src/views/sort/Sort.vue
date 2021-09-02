<template>
  <div id="sort">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <div id="tab-content">
        <tab-content-category
          :subcategories="showSubcategory"
        ></tab-content-category>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/NavBar.vue";
import TabContentCategory from "./sortChildren/TabContentCategory.vue";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "../../network/sort";
import TabMenu from "./sortChildren/TabMenu.vue";
export default {
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
    };
  },
  components: {
    NavBar,
    TabMenu,
    TabContentCategory,
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        console.log(res);
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        console.log(res);
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  font-weight: 700;
  color: #fff;
  z-index: 999;
  background-color: rgb(255, 142, 150);
}
.content {
  position: absolute;
  height: auto;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
  position: absolute;
  height: auto;
  left: 100px;
  right: 0;
  top: 0;
  bottom: 49px;
  display: flex;
}
</style>
