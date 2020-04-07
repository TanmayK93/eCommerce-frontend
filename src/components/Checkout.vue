<template>
  <div class="container">
    <div class="mt-5">
      <h5>Customer Information :</h5>

      <div class="row" v-if="!isUserLoggedIn">
        <div class="col-md-2">
          <b-button to="/login" class="btn pl-5 pr-5" variant="success"
            >Login <i class="fa fa-angle-right"></i
          ></b-button>
        </div>

        <div class="col-md-1 mt-2">
          <h6>--OR--</h6>
        </div>

        <div class="col-md-4">
          <b-button
            to="/"
            @click="Checkout()"
            class="btn pl-5 pr-5"
            variant="success"
            >Continue as a Guest <i class="fa fa-angle-right"></i
          ></b-button>
        </div>
      </div>

      <div class="row" v-else :text="$store.state.userDetail.username">
        <div class="col-md-4">
          <b-button class="btn pl-5 pr-5" @click="Checkout()" variant="success"
            >Continue as {{ $store.state.userDetail.username }}
            <i class="fa fa-angle-right"></i
          ></b-button>
        </div>
      </div>
    </div>

    <table id="cart" class="table table-hover table-condensed mt-5">
      <thead>
        <tr>
          <th style="width: 60%;">Product</th>
          <th style="width: 20%;">Price</th>
          <th style="width: 20%;">Quantity</th>
          <th style="width: 20%;" class="text-center">Subtotal</th>
        </tr>
      </thead>

      <tbody>
        <CheckoutItem
          v-for="(item, index) in inCart"
          :key="item.id"
          :index="index"
          :id="item.id"
          :name="item.name"
          :description="item.description"
          :image="item.image"
          :price="item.price"
          :quantity="item.quantity"
        />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="hidden-xs"></td>
          <td colspan="1" class="hidden-xs text-right">
            <p>Total:</p>
            <p>Tax:</p>
          </td>

          <td colspan="1" class="hidden-xs text-right">
            <p>
              <strong class="ml-5">${{ getcartTotal.toFixed(2) }}</strong>
            </p>
            <p>
              <strong class="ml-5"
                >${{ (getcartTotal * 0.13).toFixed(2) }}</strong
              >
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="hidden-xs"></td>

          <td colspan="1" class="hidden-xs text-right">
            <p>Final Amount:</p>
          </td>
          <td colspan="1" class="hidden-xs text-right">
            <p>
              <strong class="ml-5"
                >${{ (getcartTotal * 1.13).toFixed(2) }}</strong
              >
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <b-button to="/cart" class="btn pl-5 pr-5"
              ><i class="fa fa-angle-left"></i> Back to Cart</b-button
            >
          </td>

          <td colspan="2" class="hidden-xs"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import CheckoutItem from "./CheckoutItem";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "Cart",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },

      show: true,
    };
  },
  computed: {
    forSale() {
      return this.$store.state.forSale;
    },

    inCart() {
      return this.$store.state.inCart;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    ...mapGetters(["getcartTotal"]),
  },
  methods: {
    Checkout() {
      let vm = this;
      let user = "";
      if (!vm.$session.get("userid")) {
        user = 5;
      } else {
        user = vm.$session.get("userid");
      }
      let total = this.$store.getters.getcartTotal * (1.13).toFixed(2);
      axios
        .post("https://ecommerce-api-2019.herokuapp.com/orders/placeorder", {
          userid: user,
          total: total,
        })
        .then(function (response) {
          console.log(response.data);
          if (!response.data.error) {
            console.log("Pass");
            vm.$router.push({ name: "Home" });
          } else {
            console.log("Fail");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    CheckoutItem,
  },
};
</script>

<style></style>
