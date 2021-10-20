<template>
  <div class="hello">
    <h3>Tareas</h3>
    <div class="legend">
      <span>Presiona dos veces para terminar tarea</span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        v-for="todo in allTodos"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }} <br /><br />
        <tr v-for="list in todo.list" :key="list.id">
          <ul>
            <li>
              <td>{{ list }}</td>
            </li>
          </ul>
        </tr>
            <h6 al>Id de la tarea: {{ todo.id }}</h6>
            <i class="fas fa-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo", "changeTodoInfo"]),
    onDblClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        list: todo.list,
        completed: !todo.completed,
      };
      this.updateTodo(updatedTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 4rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box,
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.complete-box {
  background: #35495e;
}
.incomplete-box {
  background: #41b883;
}
.is-complete {
  color: #fff;
  background: #35495e;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
