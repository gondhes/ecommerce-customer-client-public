<template>
  <div class="col-3" >
    <div class="card">
      <div class="div-img"><img class="card-img" :src="product.img_url"></div>
      <div class="card-body">
        <h5 class="card-name">{{ product.name }}</h5>
        <h5 class="card-price">Rp {{ product.price }}</h5>
        <h5 class="card-stock">stock: {{ product.stock }}</h5>
        <a href="#" class="btn btn-buy">buy</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
  .card {
    border-radius: 20px;
    border: 2px solid #73AD21;
    padding: 15px;
    margin-bottom: 100px;
  }

  .div-img {
    height: 250px;
    position: relative;
  }

  .card-img {
    margin-top: 15%;
  }
</style>
