<template>
  <div>
    <button type="button" v-on:click="dashboard()">Volver al tablero</button>
    <AddTodoUpdate />
  </div>
</template>

<script>
// import axios from "axios";
import AddTodoUpdate from "../components/AddTodoUpdate.vue";

export default {
  name: "UpdateInfo",
  data() {
    return {};
  },
  components: {
    AddTodoUpdate,
  },
  methods: {
    dashboard(){
        this.$router.push('todos');
    },
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
