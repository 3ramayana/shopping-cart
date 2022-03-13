<template>
  <Navbar
    :cart="cart"
    :cartQty="cartQty"
    :cartTotal="cartTotal"
    @toggle="toggleSliderStatus"
    @deleteItem="deleteItem"
  />
  <div class="container mt-5 pt-5">
    <PriceSlider
      :sliderStatus="sliderStatus"
      :maximum="maximum"
      @updateMaximum="updateMaximum"
    />
    <ProductList :products="products" :maximum="maximum" @addItem="addItem" />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    ProductList,
    PriceSlider,
    Navbar,
  },
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
  ],
  methods: {
    toggleSliderStatus() {
      this.$emit("toggle");
    },
    addItem(item) {
      this.$emit("addItem", item);
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    updateMaximum(value) {
      this.$emit("updateMaximum", value);
    },
  },
};
</script>
