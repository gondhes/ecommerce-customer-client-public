<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <section class="cart-table" id="cart-table">
    <br>
    <div>
      <table>
        <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody id="cart-list">
          <!-- get cart list -->
          <CartTable/>
        </tbody>
      </table>
    </div>
    </section>
  </div>
</template>

<script>
import CartTable from '@/components/CartTable.vue'

export default {
  name: 'Cart',
  components: {
    CartTable
  },
  computed: {
    carts () {
      return this.$store.state.carts.filter(cart => cart.UserId === +localStorage.id)
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style>

</style>
