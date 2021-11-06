<template>
  <section class="catalog">
    <ProductList :products="products" />
  </section>
</template>

<script>
import products from "./data/products.js";
import ProductList from "./components/ProductList.vue";

export default {
  components: {
    ProductList,
  },
  name: "App",
  data() {
    return {
      products,
    };
  },
};
</script>
