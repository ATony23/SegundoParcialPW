<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
      <div class="upper">
        <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid" />
      </div>
      <div class="user text-center">
        <div class="profile">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            class="rounded-circle"
            width="80"
          />
        </div>
      </div>
      <div class="mt-5 text-center">
        <h4 class="mb-0">accept@test.com</h4>
        <span class="text-muted d-block mb-2">Chihuahua, Chihuahua.</span>
        <h5>Estado Actual:</h5>
        <h6 style="color: orange" class="mb-0">En línea</h6>
      </div>
      <div>
        <br /><br />
        <button type="button" v-on:click="dashboard()">Tablero</button>
        <button type="button" v-on:click="logOut()">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  data() {
    return {};
  },
  components: {},
  methods: {
    dashboard(){
        this.$router.push('todos');
    },
    logOut(){
      this.$router.push('/')
    }
  },
};
</script>

<style scoped>
input[type="button"] {
  flex: 1;
  background: #41b883;
  color: rgb(255, 255, 255);
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
