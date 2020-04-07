<template>
  <div>
    <div>
      <b-form @submit="onSubmit" v-if="show">
        <div class="row">
          <div class="col-md-4 mx-auto pt-5">
            <img
              src="http://newwestcharter.org/wp-content/uploads/2016/06/circle-portrait-herrera-17-01.png"
              class="img-circle"
              alt="Cinque Terre"
              width="300"
              height="300"
            />
          </div>

          <div class="col-md-7 mt-3">
            <b-form-group id="exampleInputGroup1" label="Username:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="username" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Email:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="postal" v-model="email" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Password:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="password" v-model="form.password" required></b-form-input>
            </b-form-group>

            <b-button
              class="mt-3 mr-3"
              type="submit"
              variant="primary"
              v-on:click="updateDetails()"
            >Update</b-button>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id", "username", "email", "phone"],
  data() {
    return {
      form: {
        username: "",
        email: "",
        phone: "",
        password: "",
        id: ""
      },
      show: true
    };
  },
  created() {
    this.form.username = this.userDetail.username;
    this.form.email = this.userDetail.email;
    this.form.password = this.userDetail.password;
    this.form.id = this.userDetail.id;
  },
  methods: {
    updateDetails() {
      console.log(id, this.form.password);
      axios
        .post("/users/update", { userid: _id, password: this.form.password })
        .then(function(response) {
          console.log("saved successfully");
        });
    }
  },

  computed: {
    userDetail() {
      return this.$store.state._userDetail;
    }
  }
};
</script>