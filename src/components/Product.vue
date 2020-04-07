<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4 mt-5">
    <div class="text-center">
      <router-link :to="'/productdetail/' + id">
        <img
          class="card-img-top"
          :to="'/productdetail/' + id"
          :src="image"
          :alt="name"
          style="height: 360px; width: 230px;"
        />
      </router-link>
      <div class="card-body">
        <h4 class="card-title mt-1 titleline">
          <h5>{{ name }}</h5>
        </h4>
        <p class="card-text descline mt-3">
          {{ description }}
        </p>
      </div>
      <h4>${{ price }}</h4>

      <b-button
        class="btn center-block mt-3"
        variant="success"
        @click="addToCart(id, name, image, description, price, 1)"
        >Add To Cart</b-button
      >
      <b-button
        :to="'/productdetail/' + id"
        class="btn center-block mt-3"
        variant="success"
        ><font-awesome-icon icon="eye"
      /></b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  props: ["id", "description", "name", "image", "price"],
  data() {
    return {};
  },

  methods: {
    addToCart(id, name, image, description, price, qnt) {
      const cartProduct = {
        id: id,
        name: name,
        image: image,
        description: description,
        price: price,
        quantity: qnt
      };
      let vm = this;
      let user = "";
      if (!vm.$session.get("userid")) {
        console.log("insideif");
        user = 5;
      } else {
        console.log("inside else");
        user = vm.$session.get("userid");
      }
      axios
        .post("hhttps://ecommerce-api-2019.herokuapp.com/carts/addToCart/", {
          ProductId: id,
          UserId: user,
          quantity: 1
        })
        .then(function(response) {
          console.log(response.data);
          if (!response.data.error) {
            console.log("Pass");
            vm.$store.dispatch("addToCart", cartProduct);
          } else {
            console.log("Fail");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.titleline {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 50px;
  margin: 0 auto;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.descline {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
