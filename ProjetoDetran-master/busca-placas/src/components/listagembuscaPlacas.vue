<template>
  <div>
    <ul v-for="dados in multasVeiculos" :key="dados.PLACA">
      <li>Placa: {{dados.PLACA}}</li>
      <li>Localidade: {{dados.LOCALIDADE}}</li>
      <li>Data e Hora: {{dados.DADOS_INFRACAO.DATAHORA}}</li>
      <li>Tipo: {{dados.DADOS_INFRACAO.TIPO}}</li>
      <li v-if="dados.DADOS_INFRACAO.VALOR">Valor: {{dados.DADOS_INFRACAO.VALOR}}</li>
      <li
        v-if="dados.DADOS_INFRACAO.VEL_MAXIMA"
      >Velocidade Máxima: {{dados.DADOS_INFRACAO.VEL_MAXIMA}}</li>
    </ul>

    <button @click="novaConsultaplaca">Nova Consulta</button>
  </div>
</template>

<script>
export default {
  computed: {
    multasVeiculos() {
      return this.$store.state.multasVeiculos;
    }
  },
  methods: {
    novaConsultaplaca: function() {
      this.$router.push("/main");
    }
  }
};
</script>

<style>
</style>