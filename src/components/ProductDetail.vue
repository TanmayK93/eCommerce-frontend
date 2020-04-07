<template>
  <div class="container" id="product-section">
    <div class="row mt-5">
      <div class="col-md-5">
        <img
          :src="product.image"
          :alt="product.name"
          width="80%"
          class="mx-auto d-block image-responsive"
        />
      </div>

      <div class="col-md-7">
        <div class="row mt-4">
          <div class="col-md-12">
            <h2>{{ product.name }}</h2>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col-md-12">
            <p>{{ product.description }}</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 mt-0" v-if="product.sale === 'yes'">
            <h5>
              <b-badge>On sale</b-badge>
              {{ product.discount }}% OFF
            </h5>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-12">
            <font-awesome-icon
              icon="star"
              style="width: 25px; height: 25px; color: darkorange;"
              class="mr-3"
              v-for="index in product.rating"
              :key="index"
            />
            <font-awesome-icon
              icon="star"
              style="width: 25px; height: 25px; color: lightgrey;"
              class="mr-3"
              v-for="index in (5-product.rating)"
              :key="index"
            />
            <h5 class="mt-3">61 Reviews</h5>
          </div>
        </div>
        <!-- end row -->

        <div class="row mt-3">
          <div class="col-md-1">
            <p>Price:</p>
          </div>

          <div class="col-md-6">
            <h2 class="product-price">${{ product.price }}</h2>
            <span v-if="product.shippingCost === 0">FREE Shipping</span>
            <span v-else>
              $
              <strong>{{ product.shippingCost }}</strong> Shipping Charges
            </span>
          </div>
        </div>
        <!-- end row -->

        <div class="row mt-4">
          <div class="col-md-4">
            <quantity
              v-bind:quantity="quantity"
              v-on:changeQnt="updateQnt($event)"
            ></quantity>
          </div>

          <div class="col-md-5">
            <b-button block size="lg" @click="addToCart(product, quantity)"
              >Add To Cart</b-button
            >
          </div>
        </div>
        <!-- end row -->

        <div class="row mt-4">
          <div class="col-md-4">
            <h5>In Stock</h5>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end row -->

    <div class="row mt-5">
      <br />
      <br />

      <h5>Comments {{ countcomments }}</h5>
      <hr />
    </div>

    <div>
      <b-media
        tag="li"
        class="mt-3"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <b-img
          :src="product.image"
          class="img-responsive"
          style="height: 100px;"
          alt="placeholder"
          slot="aside"
        ></b-img>

        <div class="row mt-2">
          <div class="col-md-9">
            <h5 class="mt-0 mb-1">{{ comment.username }}</h5>
          </div>

          <div class="col-md-3">
            <p class="mt-0 mb-1 text-right">4 days ago.</p>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-12">
            <font-awesome-icon
              icon="star"
              style="width: 20px; height: 20px; color: darkorange;"
              class="mr-1"
              v-for="index in comment.rating"
              :key="index"
            />
            <font-awesome-icon
              icon="star"
              style="width: 20px; height: 20px; color: lightgrey;"
              class="mr-1"
              v-for="index in (5-comment.rating)"
              :key="index"
            />
          </div>
        </div>

        <p class="mb-0 mt-2">{{ comment.description }}</p>
        end row
      </b-media>
    </div>
  </div>
  <!-- end container -->
</template>

<script>
import Quantity from "./Quantity";
import axios from "axios";

export default {
  name: "ProductDetail",

  methods: {
    updateQnt: function (updatedQnt) {
      this.quantity = updatedQnt;
    },

    allComments() {
      var vm = this;
      let product = this.$route.params.id;
      console.log("Product id Comments", product);

      axios
        .get(
          "https://ecommerce-api-2019.herokuapp.com/comments/comments/" +
            product
        )
        .then(function (response) {
          if ((response.status = 200)) {
            vm.comments = response.data;
            vm.countcomments = response.data.length;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    addToCart(product, qnt) {
      const cartProduct = {
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        quantity: qnt,
      };

      let vm = this;
      let user = "";
      if (!vm.$session.get("userid")) {
        user = 5;
      } else {
        user = vm.$session.get("userid");
      }

      axios
        .post("https://ecommerce-api-2019.herokuapp.com/carts/addToCart/", {
          ProductId: product._id,
          UserId: user,
          quantity: qnt,
        })
        .then(function (response) {
          if (!response.data.error) {
            vm.$store.dispatch("addToCart", cartProduct);
            quantity = 1;
          } else {
            console.log("Fail");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  computed: {
    product() {
      const id = parseInt(this.$route.params.id);

      return this.$store.state.forSale.filter(function (c) {
        return c._id === id;
      })[0];
    },

    inCart() {
      return this.$store.state.inCart;
    },

    forSale() {
      return this.$store.state.forSale;
    },
  },

  mounted() {
    this.allComments();
  },
  components: {
    Quantity,
  },
  data() {
    return {
      quantity: 1,
      comments: [],
      prdid: 0,
      countcomments: 0,
    };
  },
};
</script>

<style></style>
