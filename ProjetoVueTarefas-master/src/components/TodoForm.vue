<template>
  <div id="TodoForm">
      <input type="text" placeholder="Nova tarefa?" v-model="titulo">
      <button @click="adicionarTarefa">OK</button>

  </div>

</template>

<script>
export default {

name: "TodoForm",
props: ['TodoList'],
data: function() {

return {

titulo: ""

};

},methods:{

adicionarTarefa: function() {

this.$emit("adicionouTarefa",{

  titulo: this.titulo

      })
    } 
  } 
};
</script>

<style>

#TodoForm{

border: 2px solid black;
height: 100px;
width: 300px;
margin: 10px 150px 50px 500px;

}

input{

margin-top: 40px;

}



</style>