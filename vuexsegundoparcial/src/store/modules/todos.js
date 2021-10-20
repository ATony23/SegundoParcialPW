import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => {
    return state.todos
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('http://localhost:3000/todos?completed=false');

    commit('setTodos', response.data);
  }, 

  async fetchTodosByTitle({ commit }, actualTitle) {
    const response = await axios.get(`http://localhost:3000/todos?title=${actualTitle}`);

    commit('setTodos', response.data);
  },

  async fetchTodosEnd({ commit }) {
    const response = await axios.get('http://localhost:3000/todos?completed=true');

    commit('setTodos', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);

    commit('removeTodo', id);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(`http://localhost:3000/todos/${updatedTodo.id}`, updatedTodo);

    commit('updateTodo', response.data);
  },

  async addTodo({ commit }, [title, list]) {
    const response = await axios.post(`http://localhost:3000/todos`,
      { title: title, list: list, completed: false })

    commit('addTodo', response.data)
  },

  async addTodoJustOne({ commit }, title) {
    const response = await axios.post(`http://localhost:3000/todos`,
      { title: title, completed: false })

    commit('addTodo', response.data)
  },

  async addTodoEnd({ commit }, [title, list]) {
    const response = await axios.post(`http://localhost:3000/todos`,
      { title: title, list: list, completed: true })

    commit('addTodoEnd', response.data)
  },

  async changeTodoInfo({ commit }, updatedTodo) {
    console.log('En el método: ', updatedTodo);
    const response = await axios.put(`http://localhost:3000/todos/${updatedTodo.id}`, updatedTodo)

    commit('changeTodoInfo', response.data)
  },
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo: (state, id) => state.todos = state.todos.filter((todo) => todo.id !== id),
  updateTodo: (state, updatedTodo) => {
    // Find index
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo: (state, newTodo) => state.todos.unshift(newTodo)
};


export default {
  state,
  getters,
  actions,
  mutations
};