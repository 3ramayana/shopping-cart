<template>
  <div
    class="modal fade"
    id="itemDetailModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ item.name }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <img
                :src="item.image"
                :alt="item.image_title"
                class="img-thumbnail border-0"
              />
            </div>
            <div class="col-8">
              <p class="fs-2"><Price :value="item.price" /></p>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
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
</template>

<script>
import Price from "./Price.vue";

export default {
  components: { Price },
  props: ["item"],
};
</script>

<style></style>
