<template>
  <table id="cart" class="table table-condensed">
    <thead>
      <tr>
        <th style="width:60%">Product</th>
        <th style="width:10%">Price</th>
        <th style="width:10%">Quantity</th>
        <th style="width:20%" class="text-center">Subtotal</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs">
              <img :src="image" :alt="name" class="img-responsive" style="width: 80px;" />
            </div>
            <div class="col-sm-6">
              <p class="nomargin">{{name}}</p>
            </div>
          </div>
        </td>

        <td data-th="Price">${{price}}</td>

        <td data-th="Quantity">
          <p>{{quantity}}</p>
        </td>

        <td data-th="Subtotal" class="text-center">${{(price*quantity).toFixed(2)}}</td>
      </tr>

      <tr>
        <td colspan="4">
          <h6>Write Your Review:</h6>
          <b-form @submit="onSubmit">
            <div class="row">
              <div class="col-md-8">
                <b-form-input
                  id="exampleInput1"
                  type="text"
                  placeholder="Write Here.."
                  v-model="reviewText"
                  required
                ></b-form-input>
              </div>

              <div class="col-md-2">
                <b-dropdown id="rating-dropdown" text="Rating" class="col-md-12">
                  <b-dropdown-item>1 Star</b-dropdown-item>
                  <b-dropdown-item>2 Star</b-dropdown-item>
                  <b-dropdown-item>3 Star</b-dropdown-item>
                  <b-dropdown-item>4 Star</b-dropdown-item>
                  <b-dropdown-item>5 Star</b-dropdown-item>
                </b-dropdown>
              </div>

              <div class="col-md-2">
                <b-button class="btn center-block">
                  <font-awesome-icon icon="paperclip" />Attach Image
                </b-button>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-md-2">
                <b-button class="btn btn-block" type="submit" variant="primary">Publish</b-button>
              </div>

              <p>No Image Selected</p>
            </div>
          </b-form>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  name: "OrderProduct",

  props: ["id", "name", "image", "price", "quantity"],

  data() {
    return {
      reviewText: ""
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    }
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
