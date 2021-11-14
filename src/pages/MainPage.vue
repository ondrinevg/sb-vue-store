<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        v-model:price-from="filterPriceFrom"
        v-model:price-to="filterPriceTo"
        v-model:category-id="filterCategoryId"
        v-model:color-find="filterColor"
      />

      <section class="catalog">
        <ProductList
          :products="products"
          @goToPage="
            (pageName, PageParams) => $emit('goToPage', pageName, pageParams)
          "
        />

        <BasePagination
          :modalValue="page"
          @update:modalValue="page = $event"
          :count="countProducts"
          :perPage="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from "@/data/products.js";
import ProductList from "@/components/ProductList.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import ProductFilter from "@/components/ProductFilter.vue";

export default {
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
  },
  name: "MainPage",
  data() {
    return {
      page: 1,
      productsPerPage: 3,
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: "",
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;

      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price >= this.filterPriceFrom
        );
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= this.filterPriceTo
        );
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId === this.filterCategoryId
        );
      }

      if (this.filterColor) {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors.includes(this.filterColor)
        );
      }
      return filteredProducts;
    },
  },
};
</script>
