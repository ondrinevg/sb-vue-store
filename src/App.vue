<template>
  <component
    :is="currentPageName"
    :page-params="currentPageParams"
    @goToPage="(pageName, PageParams) => goToPage(pageName, pageParams)"
  />
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import NotFoundPage from "./pages/NotFoundPage";
import eventBus from "./eventBus";

const routes = {
  main: "MainPage",
  product: "ProductPage",
};

export default {
  components: {
    MainPage,
    ProductPage,
    NotFoundPage,
  },
  data() {
    return {
      currentPage: "main",
      currentPageParams: {
        id: 1,
      },
    };
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageName() {
      return routes[this.currentPage] || "NotFoundPage";
    },
  },
  created() {
    eventBus.$on("goToPage", (pageName, pageParams) =>
      this.goToPage(pageName, pageParams)
    );
  },
};
</script>
