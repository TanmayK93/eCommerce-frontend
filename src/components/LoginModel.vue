<template>
  <div>
    <b-btn v-b-modal.modalPrevent>Launch demo modal</b-btn>

    <!-- Modal Component -->
    <b-modal id="modalPrevent" ref="modal" title="Login" @ok="handleOk" @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <h4>Email Id</h4>
        <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      names: []
    };
  },
  methods: {
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.name) {
        alert("Please enter your name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.name);
      this.clearName();
      this.$refs.modal.hide();
    }
  }
};
</script>
