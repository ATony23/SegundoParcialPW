<template>
  <div>
    <h1>Añade una nueva tarea/lista</h1>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" size="30" v-model="title" placeholder="Título" />
        <input type="text" size="30" v-model="list" placeholder="Lista" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      list: [],
    };
  },
  methods: {
    ...mapActions(["addTodo", "addTodoJustOne"]),
    onSubmit(event) {
      event.preventDefault();

      if (this.list == "" && this.title != "") {
        
        this.addTodoJustOne(this.title);
        this.title = "";

      } else if (this.list != "" && this.title != "") {

        var newList = this.list.split(",");
        this.addTodo([this.title, newList]);
        this.title = "";
        this.list = [];
      } else {
        console.log('N')
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
