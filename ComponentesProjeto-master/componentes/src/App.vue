<template>
  <div id="app">
    <!-- criado a propriedade "caixinhas", onde será enviado a váriavel "caixinhas2" para o componente Caixas -->
    <caixas />
    <!-- O "$event" serve para pegar todas as informações do método disparado -->
    <ferramentas @alteraCor="alteraCor($event)" @alterouTexto="alteraTexto"/>
  </div>
</template>


<script>

import Caixas from "./components/Caixas.vue"
import Ferramentas from "./components/Ferramentas.vue"

export default {
  name: 'App',
  components: {
    Caixas, Ferramentas
    }, data: function(){
      return {
   

      } 
    }, methods: {

      alteraCor: function (event) {
        this.caixinhas[event.caixa].cor = event.cor
       
     }, alteraTexto: function (event){
        this.caixinhas[event.caixa].titulo = event.titulo

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
