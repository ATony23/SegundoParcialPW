<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <h1>Id de la tarea a editar</h1>
        <input type="text" size="10" v-model="actualId" placeholder="Id" />
        <h1>Añade la nueva información</h1>
        <input type="text" size="30" v-model="title" placeholder="Título" />
        <input type="text" size="30" v-model="list" placeholder="Lista" />
        <br />
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodoUpdate",
  data() {
    return {
      actualId: "",
      title: "",
      list: [],
    };
  },
  methods: {
    ...mapActions(["changeTodoInfo"]),
    onSubmit(event) {
      event.preventDefault();

      if (this.list == "" && this.title != "") {
        const updatedTodo = {
          id: this.actualId,
          title: this.title,
          list: [],
          completed: false,
        };

        this.changeTodoInfo(updatedTodo);
        alert('Enviado');

      } else if (this.list != "" && this.title != "") {
        var newList = this.list.split(",");

        const updatedTodo = {
          id: this.actualId,
          title: this.title,
          list: newList,
          completed: false,
        };

        this.changeTodoInfo(updatedTodo);
        alert('Enviado');
      }
    },
  },
};
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
