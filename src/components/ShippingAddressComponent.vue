<template>
  <div class="roow">
    <div>
      <h5>Address: {{id}}</h5>
      <b-form @submit="onSubmit" v-if="show">
        <div class="row">
          <div class="col-md-5">
            <b-form-group id="exampleInputGroup1" label="Ship To:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="name" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Address:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="fullAddress" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="City:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="city" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Region:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="region" required></b-form-input>
            </b-form-group>
          </div>

          <div class="col-md-5">
            <b-form-group id="exampleInputGroup1" label="Country:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" v-model="country" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Postal Code:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="postal" v-model="postal" required></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1" label="Phone:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="nummber" v-model="phone" required></b-form-input>
            </b-form-group>
          </div>
        </div>

        <b-button class="mt-3 mr-3" type="submit" variant="primary">Update</b-button>
        <br />
        <br />
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "address1",
    "address2",
    "city",
    "region",
    "country",
    "postal",
    "phone"
  ],
  data() {
    return {
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    }
  },
  created() {
    console.log("shipping called", postal, phone);
  },
  computed: {
    fullAddress() {
      return `${this.address1}, ${this.address2}`;
    }
  }
};
</script>