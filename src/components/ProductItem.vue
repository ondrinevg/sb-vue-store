<template>
  <li class="catalog__item">
    <a
      class="catalog__pic"
      href="#"
      @click.prevent="goToPage('product', { id: product.id })"
    >
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">{{ product.title }}</a>
    </h3>

    <span class="catalog__price"> {{ formatPrice }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="color"
            v-model="currentColor"
          />
          <span class="colors__value" :style="{ backgroundColor: color }">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import goToPage from "@/helpers/goToPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: "ProductItem",
  data() {
    return {
      currentColor: this.product.colors[0],
    };
  },
  methods: {
    goToPage,
  },
  computed: {
    formatPrice() {
      return numberFormat(this.product.price);
    },
  },
  props: {
    product: Object,
  },
};
</script>
