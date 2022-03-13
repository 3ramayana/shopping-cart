<template>
  <nav
    class="navbar fixed-top navbar-dark shadow"
    style="background-color: #173440"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Shopping Cart</a>
      <div class="navbar-text ml-auto d-flex gap-2">
        <button class="btn btn-outline-success" @click="$emit('toggle')">
          <font-awesome-icon icon="magnifying-glass-dollar" />
        </button>
        <div class="dropdown" v-if="cart.length > 0">
          <button
            class="btn btn-success dropdown-toggle"
            type="button"
            id="dropdownCart"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="badge rounded-pill bg-warning text-dark me-2">{{
              cartQty
            }}</span>
            <font-awesome-icon icon="bag-shopping" class="me-2" />
            <Price :value="cartTotal" class="me-2" />
          </button>
          <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownCart"
          >
            <div
              class="dropdown-item d-flex flex-nowrap"
              v-for="(item, index) in cart"
              :key="index"
            >
              <div class="me-3">
                <span class="badge rounded-pill bg-light text-dark me-2">{{
                  item.qty
                }}</span>
                {{ item.product.name }}
              </div>
              <div class="ms-auto">
                <Price
                  :value="item.qty * item.product.price"
                  class="fw-bold me-2"
                />
                <a
                  href="#"
                  class="badge bg-danger text-white"
                  @click.stop="$emit('deleteItem', index)"
                  ><font-awesome-icon icon="circle-minus"
                /></a>
              </div>
            </div>

            <router-link to="/checkout" class="dropdown-item d-grid mt-3"
              ><button class="btn btn-outline-success">
                <font-awesome-icon icon="dollar-sign" class="me-2" />Checkout
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price.vue";
export default {
  components: {
    Price,
  },
  props: ["cart", "cartQty", "cartTotal"],
};
</script>

<style></style>
