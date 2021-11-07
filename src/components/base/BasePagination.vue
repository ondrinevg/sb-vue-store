<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': modalValue === 1 }"
        @click.prevent="prevPage"
        aria-label="Предыдущая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        href="#"
        class="pagination__link"
        :class="{ 'pagination__link--current': pageNumber === modalValue }"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        @click.prevent="nextPage"
        :class="{ 'pagination__link--disabled': modalValue === pages }"
        aria-label="Следующая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BasePagination",
  props: {
    modalValue: Number,
    count: Number,
    perPage: Number,
  },
  emits: ["update:modalValue"],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit("update:modalValue", page);
    },
    prevPage() {
      if (this.modalValue > 1)
        this.$emit("update:modalValue", this.modalValue - 1);
    },
    nextPage() {
      if (this.modalValue < this.pages)
        this.$emit("update:modalValue", this.modalValue + 1);
    },
  },
};
</script>
