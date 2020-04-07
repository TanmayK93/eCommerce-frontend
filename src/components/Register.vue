<template>
  <div class="container">
    <div class="mt-5">
      <div class="col-md-5 mx-auto d-block">
        <h2 class="ml-0">Register</h2>

        <b-form class="mt-5" @submit="onSubmit" v-if="show">
          <b-form-group id="inEmail" label="UserName" label-for="exampleInput1">
            <b-form-input
              id="exampleInput1"
              type="text"
              v-model="form.username"
              required
              placeholder="Enter Username"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="inEmail"
            label="Email Id:"
            label-for="exampleInput2"
          >
            <b-form-input
              id="exampleInput2"
              type="email"
              v-model="form.email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="inPassword"
            label="Password:"
            label-for="exampleInput3"
          >
            <b-form-input
              id="exampleInput3"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="inConnfirmPassword"
            label="Confirm Password:"
            label-for="exampleInput4"
          >
            <b-form-input
              id="exampleInput2"
              type="password"
              v-model="form.password2"
              required
              placeholder="Confirm Password"
            ></b-form-input>
          </b-form-group>

          <b-button
            class="mt-3 mr-2"
            type="submit"
            variant="primary"
            v-on:click="registrUser"
            >Register User</b-button
          >
          <b-button class="mt-3" :to="'/login'" variant="danger"
            >Login</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },

    registrUser() {
      const self = this;

      if (this.form.password == this.form.password2) {
        axios
          .post("https://ecommerce-api-2019.herokuapp.com/users/add", {
            username: this.form.username,
            email: this.form.email,
            password: this.form.password,
          })
          .then(function (response) {
            console.log(response.data);
            if (!response.data.error) {
              console.log("Pass");
              self.$store.dispatch("login");
              self.$router.push({ name: "Home" });
            } else {
              console.log("Fail");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },

  computed: {
    user() {
      return this.$store.state.userDetail;
    },
  },
};
</script>
