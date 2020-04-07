<template>
  <tr>
    <td data-th="Product">
      <div class="row">
        <div class="col-sm-2 hidden-xs mr-4">
          <img
            :src="image"
            :alt="name"
            class="img-responsive"
            style="width: 100px;"
          />
        </div>
        <div class="col-sm-9">
          <h4 class="nomargin">{{ name }}</h4>
          <p>{{ description }}</p>
        </div>
      </div>
    </td>

    <td data-th="Price">${{ price }}</td>

    <td data-th="Quantity">
      <input
        type="number"
        class="form-control text-center"
        min="1"
        :value="quantity"
        @change="
          changeQnt(
            (value = $event.target.value),
            id,
            name,
            image,
            description,
            price
          )
        "
      />
    </td>
    <td data-th="Subtotal" class="text-center">
      ${{ (price * quantity).toFixed(2) }}
    </td>

    <td class="actions" data-th>
      <button
        class="btn btn-danger btn-block"
        @click.prevent="deleteItem(index, id)"
      >
        <font-awesome-icon icon="trash" />
      </button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";

export default {
  name: "CartItem",

  props: ["id", "index", "description", "name", "image", "price", "quantity"],

  data() {
    return {};
  },
  created() {
    console.log("cart Item Called");
  },
  methods: {
    changeQnt: function (value, id, name, image, description, price) {
      if (value > 0) {
        const cartProduct = {
          id: id,
          name: name,
          image: image,
          description: description,
          price: price,
          quantity: Number(value),
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
        console.log("user is ", user, Number(value));

        axios
          .post("https://ecommerce-api-2019.herokuapp.com/carts/addToCart/", {
            ProductId: id,
            UserId: user,
            quantity: Number(value),
          })
          .then(function (response) {
            console.log(response.data);
            if (!response.data.error) {
              console.log("Pass");
              this.$store.dispatch("changeCartQnt", cartProduct);
            } else {
              console.log("Fail");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.quantity = 1;
      }
    },

    deleteItem: function (index, id) {
      const itemData = {
        index: index,
        id: id,
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
      console.log("user is ", user);
      axios
        .delete(
          "https://ecommerce-api-2019.herokuapp.com/carts/edit/" +
            user +
            "/" +
            id
        )
        .then(function (response) {
          console.log(response.data);
          if (!response.data.error) {
            console.log("Pass");
            vm.$store.dispatch("deleteCartItem", itemData);
          } else {
            console.log("Fail");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
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
