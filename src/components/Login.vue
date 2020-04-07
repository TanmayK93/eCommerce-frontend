<template>
  <div class="container">
    <div class="mt-5">
      <div class="col-md-5 mx-auto d-block">
        <h2 class="ml-0">Login</h2>

        <b-form class="mt-5" @submit="onSubmit" v-if="show">
          <b-form-group
            id="inEmail"
            label="Email Id:"
            label-for="exampleInput1"
          >
            <b-form-input
              id="exampleInput1"
              type="email"
              v-model="form.email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="inPassword"
            label="Password:"
            label-for="exampleInput2"
          >
            <b-form-input
              id="exampleInput2"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter Password"
            ></b-form-input>
          </b-form-group>

          <b-button class="mt-3 mr-2" type="submit" variant="primary"
            >Login</b-button
          >
          <b-button to="/Register" class="mt-3" type="reset" variant="danger"
            >Register</b-button
          >
        </b-form>
      </div>
    </div>

    <br />
    <p class="text-center">Email : {{ this.user.email }}</p>
    <p class="text-center">Password: {{ this.user.password }}</p>

    <div>
      <bounce v-bind:loading="isLoading"></bounce>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        isFormSuccess: false,
      },

      show: true,

      isLoading: false,
    };
  },
  methods: {
    onSubmit(evt) {
      this.isLoading = true;

      evt.preventDefault();

      const self = this;

      if (this.form.email != "" && this.form.password != "") {
        console.log("check,", this.form.email, this.form.password);

        axios
          .post("https://ecommerce-api-2019.herokuapp.com/users/login", {
            email: this.form.email,
            password: this.form.password,
          })
          .then(function (response) {
            if (!response.data.error) {
              const userInfo = {
                userid: response.data[0]._id,
                username: response.data[0].username,
              };
              self.$store.state._userDetail = userInfo;
              self.$store.state.loginstate = true;
              self.$session.set("userid", userInfo.userid);
              self.$session.set("username", userInfo.username);
              self.isFormSuccess = true;
              self.$store.commit("isUserLoggedIn", self.isFormSuccess);
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

      this.isLoading = false;
    },

    LoginSuccess() {
      this.$store.dispatch("login");
      this.$router.push({ name: "Home" });
    },
  },

  computed: {
    user() {
      return this.$store.state.userDetail;
    },
  },
};
</script>
