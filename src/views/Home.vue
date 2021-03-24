<template>
  <div class="products">
    <h1>Our Products</h1>
    <br>
    <section class="product">
      <div class="container">
        <div class="row">
          <!-- Product Card -->
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    ...mapState(['products'])
  },
  components: {
    ProductCard
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
body {
  background-color: #e4e3c6;
}
</style>
