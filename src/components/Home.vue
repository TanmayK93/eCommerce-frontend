<template>
  <div class="container" id="product-section">
    <div class="row">
      <product
        v-for="item in products"
        :key="item._id"
        :id="item._id"
        :name="item.name"
        :description="item.description"
        :image="item.image"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import mapState from "vuex";
import Product from "./Product";

export default {
  name: "Home",

  data() {
    return {
      products: null,
      carts: null,
    };
  },

  created() {
    axios
      .get("https://ecommerce-api-2019.herokuapp.com/products")
      .then(
        (response) => (
          (this.products = response.data),
          (this.$store.state._forSale = this.products)
        )
      );

    let vm = this;
    let user = "";
    if (!vm.$session.get("userid")) {
      user = 5;
    } else {
      user = vm.$session.get("userid");
    }

    let listOfObjects;
    axios
      .get("https://ecommerce-api-2019.herokuapp.com/carts/cart/" + user)
      .then(
        (response) => (
          (listOfObjects = Object.keys(response.data).map((key) => {
            return response.data[key];
          })),
          (this.$store.state._inCart = listOfObjects),
          (this.$store.state.cartItemCount = listOfObjects.length)
        )
      );

    axios
      .get("https://ecommerce-api-2019.herokuapp.com/orders/order/" + user)
      .then((response) => (this.$store.state.Orders = response.data));
  },

  mounted() {},

  computed: {
    forSale() {
      return this.$store.state.forSale;
    },

    inCart() {
      return this.$store.state.inCart;
    },
  },

  components: {
    Product,
  },
};
</script>
