<template>
  <div>
    <button type="button" v-on:click="client()">Perfíl</button>
    <button type="button" v-on:click="logOut()">Log Out</button>
    <h1>Tareas Terminadas</h1><br><br>
    <AddTodoEnd />
    <div class="today mt-5">
        <button
            type="button"
            class="btn btn-light"
            v-on:click="changeCurrentView()"
        >Ver tareas sin terminar </button>
      </div>
    <TodosEnd />
  </div>
</template>

<script>
// import axios from "axios";
import TodosEnd from "../components/TodosEnd.vue";
import AddTodoEnd from "../components/AddTodoEnd.vue";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  components: {
    TodosEnd,
    AddTodoEnd
  },
  methods: {
    changeCurrentView(){
        this.$router.push('todos');
    },
    logOut(){
      this.$router.push('/')
    },
    client() {
      this.$router.push("client");
    },
  },
};
</script>

<style scoped>
input[type="button"] {
  flex: 5;
  background: #41b883;
  color: rgb(255, 255, 255);
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
