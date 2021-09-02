import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home");
const Sort = () => import("../views/sort/Sort");
const Shopping = () => import("../views/shopping/Shopping");
const Profile = () => import("../views/profile/Profile");
const Detail = () => import("../views/detail/Detail");
const Collection = () =>
  import("../views/profile/profileComponents/collection/Collection");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/sort",
    component: Sort,
  },
  {
    path: "/shopping",
    component: Shopping,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
  {
    path: "/collection",
    component: Collection,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
