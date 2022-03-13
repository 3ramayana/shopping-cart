<template>
  <div class="container mt-5 pt-5">
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length">
      <caption class="text-end h3">
        Total:
        <Price class="d-block text-success fw-light" :value="cartTotal" />
      </caption>
      <thead>
        <tr>
          <th scope="col" class="text-center">Action</th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-end">Price</th>
          <th scope="col" class="text-end">Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group">
              <div
                class="btn btn-success"
                @click="$emit('addItem', item.product)"
              >
                <font-awesome-icon icon="plus" />
              </div>
              <div
                class="btn btn-outline-danger"
                @click="$emit('deleteItem', index)"
              >
                <font-awesome-icon icon="circle-minus" />
              </div>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <th class="text-center">{{ item.qty }}</th>
          <th class="text-end">{{ Number(item.product.price) }}</th>
          <th class="text-end">{{ Number(item.product.price * item.qty) }}</th>
        </tr>
      </tbody>
    </table>
    <router-link to="/"
      ><button class="btn btn-outline-success">
        <font-awesome-icon icon="angle-left" class="me-2" />Back to Shopping
      </button></router-link
    >
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Price,
  },
};
</script>

<style></style>
