<template>
  <div>
    <button type="button" v-on:click="client()">Perfíl</button>
    <button type="button" v-on:click="logOut()">Log Out</button>
    <AddTodo />
    <div class="today mt-5">
      <button type="button" class="btn btn-light" v-on:click="changeCurrentView()">
        Ver tareas terminadas
      </button>
      <button type="button" class="btn btn-light" v-on:click="changeViewToUpdateInfo()">
        Editar tarea
      </button>
    </div>
    <Todos />
  </div>
</template>

<script>
// import axios from "axios";
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: {
    Todos,
    AddTodo,
  },
  methods: {
    changeCurrentView() {
      this.$router.push("endTodos");
    },
    logOut() {
      this.$router.push("/");
    },
    client() {
      this.$router.push("client");
    },
    changeViewToUpdateInfo() {
      this.$router.push("updateInfo");
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
