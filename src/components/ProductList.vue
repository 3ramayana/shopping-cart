<template>
  <div class="d-flex flex-wrap d-flex justify-content-around mb-5">
    <div
      class="card shadow border-0 m-4 animate__animated animate__fadeInUp"
      style="width: 15rem"
      v-for="(item, index) in showItem"
      :key="index"
    >
      <a
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#itemDetailModal"
        @click="getId(item.id)"
      >
        <img :src="item.image" :alt="item.image_title" class="card-img-top" />
      </a>
      <div class="card-body">
        <h5 class="card-title fs-6 text-center text-success">
          {{ item.name }}
        </h5>
        <div class="d-flex justify-content-between align-items-center">
          <Price
            :value="Number(item.price)"
            class="fs-4 fw-bold text-success"
          />
          <button
            class="btn btn-success rounded-pill btn-sm"
            @click="$emit('addItem', item)"
          >
            <font-awesome-icon icon="circle-plus" class="me-1" />Add
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="indexToModal">
    <Modal
      :item="products[indexToModal]"
      @addItem="$emit('addItem', products[indexToModal])"
    />
  </div>
</template>

<script>
import Price from "./Price.vue";
import Modal from "./Modal.vue";

export default {
  data() {
    return {
      indexToModal: null,
    };
  },
  components: { Price, Modal },
  props: ["products", "maximum"],
  methods: {
    getId(id) {
      this.products.filter((item, index) => {
        if (item.id == id) {
          return (this.indexToModal = index);
        }
      });
    },
  },
  computed: {
    showItem() {
      let max = this.maximum;
      return this.products.filter((item) => {
        return item.price <= max;
      });
    },
  },
};
</script>

<style></style>
