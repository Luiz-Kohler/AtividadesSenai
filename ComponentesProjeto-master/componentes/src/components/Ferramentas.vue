<template>
  <div id="ferramentas">
    <select v-model="caixaSel">
      <option value selected disabled>Selecione o Número da Caixa</option>

      <option v-for="(caixa, index) in caixinhas" :key="index" :value="index">{{caixa.titulo}}</option>
    </select>

    <div class="paleta">
      <!-- O "Click" irá invocar o método "AlteraCor" quando selecionado a opção-->
      <div
        class="cor"
        :style="cor"
        v-for="(cor, index) in cores"
        :key="index"
        @click="alteraCor(cor)"
      ></div>
    </div>
    <div class="caixaPesquisa">
      <input type="text" placeholder="Digite o nome da caixa" v-model="titulo" />
      <button @click="alterarTexto">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ferramentas",
  computed: {

 caixinhas () {
   
return this.$store.state.caixinhas
 }
   },
   data: function() {
    return {
      cores: ["background: brown", "background:white", "background: green"],
      // Definido a váriavel "caixaSel" que irá informar ao App.Vue qual caixa foi selecionada
      caixaSel: "",
      caixaPesquisa: ""
    };

    // Esse método, irá disparar um Evento no componente App.Vue para ser exibido.
  },
  methods: {
    alteraCor: function(cor) {
      // Dentro do emit, serão chamado os eventos criados no App.Vue (alterCor)
      this.$store.commit("alteraCor", {
        cor: cor,
        caixa: this.caixaSel
      });
    },
    alterarTexto: function() {
      this.$store.commit("alterouTexto", {
        titulo: this.titulo,
        caixa: this.caixaSel
      });
    }
  }
};
</script>

<style>
#ferramentas {
  width: 380px;
  height: 200px;
  border: 1px solid #fff;
  margin: 5px auto 0 auto;
  padding: 10px;
}

#ferramentas select {
  width: 210px;
  margin-bottom: 5px;
  margin-top: 10px;
}

.paleta {
  width: 200px;
  height: 50px;
  display: flex;
  margin: 30px 0 0 90px;
}

.cor {
  width: 60px;
  height: 60px;
  border: 1px solid #fff;
  margin-right: 3px;
}

b {
  color: #fff;
  margin-top: 300px;
}

.caixaPesquisa {
  width: 300px;
  height: 500px;
  margin: 50px 0 0 38px;
}
</style>