<template>
  <div id = "caixas">
    <!--  caixinhas é o vetor, onde cada elemento corrente será guardado dentro da variável caixa. 
    O "index" recebe a posição de cada item dentro do vetor, ele criará uma div para cada elemento do Vetor.-->
     
    <div class="caixinhas" v-for="(caixa, index) in caixinhas" :key="index" :style="caixa.cor">

      <!-- Aqui é pega o elemento do vetor "caixa" . "a propriedade dentro dele" "titulo"-->
      {{caixa.titulo}}

      
    </div>
</div>

</template>

<script>
export default {
name: "Caixas",

computed: {
caixinhas () {

return this.$store.state.caixinhas

}

}

}
</script>

<style>

#caixas {

width: 300px;
height: 120px;
border: 1px solid #FFF;
margin: 30px auto 10px auto;
display: flex;
flex-wrap: wrap;
}

.caixinhas{

width: 50px;
height: 50px;
border: 1px solid #FFF;
margin: 35px 0 0 35px;
text-align: center;
line-height: 50px;
user-select: none;
cursor: pointer;


}


</style>