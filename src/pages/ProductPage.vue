<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a
            class="breadcrumbs__link"
            href="#"
            @click.prevent="goToPage('main')"
          >
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a
            class="breadcrumbs__link"
            href="#"
            @click.prevent="goToPage('main', { categoryId: category.id })"
          >
            {{ category.title }}
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> {{ product.title }} </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            width="570"
            height="570"
            :src="product.image"
            :alt="product.title"
          />
        </div>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <b class="item__price"> {{ formatPrice }} ₽ </b>

            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <ul class="colors">
                <li
                  class="colors__item"
                  v-for="itemColor in product.colors"
                  :key="itemColor"
                >
                  <label class="colors__label">
                    <input
                      class="colors__radio sr-only"
                      type="radio"
                      name="color-item"
                      :value="itemColor"
                      checked=""
                    />
                    <span
                      class="colors__value"
                      :style="{ backgroundColor: itemColor }"
                    >
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button class="button button--primery" type="submit">
                В корзину
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Описание </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Характеристики </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Гарантия </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Оплата и доставка </a>
          </li>
        </ul>

        <div class="item__content">
          <p>В разработке...<br /></p>

          <a href="#"> Все характеристики </a>

          <h3>Что это?</h3>

          <p>В разработке...</p>

          <h3>Дизайн</h3>

          <p>В разработке...</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import products from "@/data/products";
import categories from "@/data/categories";
import goToPage from "@/helpers/goToPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  props: {
    pageParams: Object,
  },
  computed: {
    product() {
      return products.find((product) => product.id === this.pageParams.id);
    },
    category() {
      return categories.find(
        (category) => category.id === this.product.categoryId
      );
    },
    formatPrice() {
      return numberFormat(this.product.price);
    },
  },
  methods: {
    goToPage,
  },
};
</script>
