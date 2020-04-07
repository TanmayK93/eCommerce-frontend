<template>
  <div>
    <b-navbar toggleable="md" type="dark" class="nav-background">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand class="ml-5" href="#">BookStore</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item class="ml-4" to="/">Home</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-item right class="ml-4" to="/cart">
            <i class="fa fa-shopping-cart"></i>
            Cart ( {{$store.state.cartItemCount}} )
          </b-nav-item>

          <b-nav-item right v-if="!isUserLoggedIn" class="ml-4" to="/login">Login</b-nav-item>

          <b-nav-item-dropdown class="ml-4" right v-else :text="$store.state._userDetail.username">
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item to="/myorders">My Orders</b-dropdown-item>
            <b-dropdown-item v-on:click="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    inCart() {
      return this.$store.state.inCart;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  created() {
    let vm = this;
    if (vm.$session.get("userid")) {
      vm.$store.commit("isUserLoggedIn", true);
      vm.$store.state._userDetail.username = vm.$session.get("username");
    }
  },

  methods: {
    logout() {
      this.$store.commit("isUserLoggedIn", false);
      this.$store.state.loginstate = false;
      this.$session.destroy();
      this.$store.dispatch("logout");
      this.$router.replace({ name: "Home" });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #eef1f4;
}

.nav-background {
  background: #353535;
}
</style>
