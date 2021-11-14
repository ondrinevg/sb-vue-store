<template>
  <ul class="catalog__list">
    <ProductItem
      :product="product"
      v-for="product in products"
      :key="product.id"
      @goToPage="
        (pageName, PageParams) => $emit('goToPage', pageName, pageParams)
      "
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  name: "ProductList",
  props: ["products"],
  data() {
    return {};
  },
};
</script>
