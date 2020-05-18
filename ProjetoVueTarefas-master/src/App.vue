<template>
  <div id="app">
    <todo-form :TodoForm="TodoForm" @adicionouTarefa="adicionarTarefa"/>
    <Todo-list :TodoList="TodoList"/>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoForm, TodoList
  }, data: function() {
    return {
      TodoList: [{
          titulo: "Fazer café"
        }, {
          titulo: "Comprar Pão"
          },{
          titulo: "Jogar Futebol"
        }]
    }
  },methods: {
  adicionarTarefa: function(event) {
    this.TodoList.push({
        titulo: event.titulo
   
  })

  }
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
