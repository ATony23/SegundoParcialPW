<template>
  <div>
    <h1>Añade una nueva tarea/lista</h1>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" size="30" v-model="title" placeholder="Título de lista" />
        <input type="text" size="30" v-model="list" placeholder="Lista" />
        <br>
        <br>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AddTodoEnd",
  data() {
    return {
      title: '',
      list: []
    }
  },
  methods: {
    ...mapActions(["addTodoEnd"]),
    onSubmit(event) {
      event.preventDefault();

      var newList = this.list.split(",");
      this.addTodoEnd([this.title, newList]);
      this.title = '';
      this.list = [];
    }
  }
}
</script>

<style scoped>
  input[type="text"] {
    padding: 9px;
    border: 1px solid #41b883;
    outline: 3;
  }
  input[type="submit"] {
    flex: 1;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
  }
</style>