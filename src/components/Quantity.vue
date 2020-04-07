<template>
  <div class="quantity">
    <b-input-group>
      <b-input-group-prepend>
        <b-btn style="width:45px;" v-on:click="decrement" size="lg">-</b-btn>
      </b-input-group-prepend>

      <div class="center" style="width:45px; background:lightgrey;">
        <div class="align-middle">
          <h6 class="text-center mt-3" size="lg">{{quantity}}</h6>
        </div>
      </div>

      <b-input-group-append>
        <b-btn style="width:45px;" size="lg" v-on:click="increment">+</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>


<script>
export default {
  name: "Quantity",

  props: ["quantity"],

  data() {
    return {};
  },

  methods: {
    increment: function() {
      this.quantity++;
      this.$emit("changeQnt", this.quantity);
    },
    decrement: function() {
      if (this.quantity === 1) {
      } else {
        this.quantity--;
      }
      this.$emit("changeQnt", this.quantity);
    }
  }
};
</script>

<style>
.quantity {
  max-width: 150px;
  width: 100%;
}

.quantity input {
  text-align: center;
}
</style>
