<template>
  <div>
    <br />
    <h4 class="ml-1">OderID: {{orderId}}</h4>
    <br />
    <table id="cart" class="table table-condensed">
      <thead>
        <tr>
          <th style="width:25%">Date</th>
          <th style="width:20%">Total</th>
          <th style="width:20%">Ship To</th>
          <th style="width:35%" class="text-right">OderID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="1" class="hidden-xs">
            <p>{{date}}</p>
          </td>

          <td colspan="1" class="hidden-xs">
            <p>{{total}}</p>
          </td>

          <td colspan="1" class="hidden-xs">
            <p>{{username}}</p>
          </td>

          <td colspan="1" class="hidden-xs text-right">
            <p>{{orderId}}</p>
          </td>
        </tr>
        <tr class="no-hover">
          <td colspan="4" class="hidden-xs">
            <OrderProduct
              v-for="item in products"
              :key="item.id"
              :id="item.id"
              :name="item.name"
              :image="item.image"
              :price="item.price"
              :quantity="item.quantity"
            />
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <br />
    <br />
  </div>
</template>



<script>
import OrderProduct from "./OrderProduct";
import { mapGetters } from "vuex";

export default {
  name: "Order",

  props: [
    "orderId",
    "name",
    "username",
    "date",
    "image",
    "price",
    "quantity",
    "total",
    "tax",
    "finalAmount"
  ],

  data() {
    return {
      ord: this.orderId
    };
  },

  methods: {},

  computed: {
    ...mapGetters(["getOrderTotal"]),

    inCart() {
      return this.$store.state.inCart;
    },

    products() {
      return this.$store.state.Orders.products;
    }
  },
  components: {
    OrderProduct
  },

  created() {}
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
