<template>
  <div class="container">
    <div class="row mt-4 ml-0">
      <h2>Your Profile</h2>
    </div>

    <b-tabs class="mt-4">
      <b-tab title="Profile" active>
        <br />
        <UserDataComponent
          v-for="item in UserData"
          :key="item._id"
          v-bind:id="item._id"
          v-bind:username="item.username"
          v-bind:email="item.email"
        ></UserDataComponent>
      </b-tab>
      <b-tab title="Shipping Addresses">
        <br />
        <!--changed line number 32 and 33 -->
        <ShippingAddressComponent
          v-for="item in Address"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :address1="item.address1"
          :address2="item.address2"
          :city="item.city"
          :region="item.region"
          :country="item.country"
          :postal="item.postal"
          :phone="item.phone"
        ></ShippingAddressComponent>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from "axios";
import ShippingAddressComponent from "./ShippingAddressComponent";
import UserDataComponent from "./UserDataComponent";

export default {
  name: "Profile",
  data() {
    return {
      Address: null,
      UserData: null,
    };
  },

  created() {
    self = this;
    let userid = "";
    userid = self.$session.get("userid");
    axios
      .get(
        "https://ecommerce-api-2019.herokuapp.com/users/userdetails/" + userid
      )
      .then(function (response) {
        self.UserData = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  computed: {
    shippingAddress() {
      return this.$store.state.shippingAddresses;
    },

    profile() {
      return this.$store.state.userDetail;
    },
  },
  components: {
    ShippingAddressComponent,
    UserDataComponent,
  },
};
</script>

<style></style>
