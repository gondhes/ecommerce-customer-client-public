<template>
  <tr>
    <td>1</td>
    <td>Meja</td>
    <td>Rp 2.500.000</td>
    <td>6</td>
    <td>Rp 15.000.000</td>
    <td>
      <button href="/" class="btn">delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartTable',
  props: ['cart']
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 75%;
  margin: auto 15%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
