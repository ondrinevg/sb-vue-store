<template>
  <section class="catalog">
    <ProductList :products="products" />

    <BasePagination
      :modalValue="page"
      @update:modalValue="page = $event"
      :count="countProducts"
      :perPage="productsPerPage"
    />
  </section>
</template>

<script>
import products from "./data/products.js";
import ProductList from "./components/ProductList.vue";
import BasePagination from "./components/base/BasePagination.vue";

export default {
  components: {
    ProductList,
    BasePagination,
  },
  name: "App",
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;

      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
