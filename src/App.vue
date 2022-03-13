<template>
  <router-view
    :cart="cart"
    :products="products"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    :maximum="maximum"
    :sliderStatus="sliderStatus"
    @toggle="toggleSliderStatus"
    @addItem="addItem"
    @deleteItem="deleteItem"
    @updateMaximum="updateMaximum"
  />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      maximum: 23,
      products: [],
      cart: [],
      sliderStatus: false,
    };
  },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price").then((response) =>
      response.json().then((data) => {
        this.products = data;
      })
    );
  },
  methods: {
    addItem(product) {
      let productIndex;
      let productExist = this.cart.filter((item, index) => {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    updateMaximum(value) {
      this.maximum = value;
    },
    toggleSliderStatus() {
      this.sliderStatus = !this.sliderStatus;
    },
    deleteItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
  },
  computed: {
    cartTotal() {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty() {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },
};
</script>

<style></style>
