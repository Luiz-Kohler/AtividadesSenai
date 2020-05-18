<template>
  <div id="TodoList">
    <div class="TodoList" v-for="(TodoList, index) in TodoList" :key="index">
    {{TodoList.titulo}}
  </div>
  </div>
</template>

<script>
export default {
name: "TodoList",
computed: {
    TodoList() {
      return this.$store.state.TodoList;

    }

}

}
</script>

<style>

#TodoList{

border: 2px solid black;
height: 150px;
width: 500px;
margin-left: 380px;
color: white;

}

</style>