<template>
  <div class="container">
    <div class="row mt-4 ml-0">
      <h2>Your Orders</h2>
    </div>

    <b-tabs class="mt-4">
      <b-tab title="Orders" active>
        <Order
          v-for="item in orders"
          :key="item.orderId"
          :orderId="item.orderId"
          :username="item.username"
          :date="item.date"
          :total="item.total"
          :tax="item.tax"
          :finalAmount="item.finalAmount"
        ></Order>
      </b-tab>
      <b-tab title="Cancelled Orders">
        <br />Cancelled Orders
        <Order></Order>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Order from "./Order";
import axios from "axios";
import uniq from "lodash/uniq";

export default {
  name: "MyOrders",
  data() {
    return {};
  },
  computed: {
    forSale() {
      return this.$store.state.forSale;
    },

    orders() {
      return this.$store.state.Orders.order;
    }
  },
  components: {
    Order
  },

  created() {}
};
</script>

<style>
</style>