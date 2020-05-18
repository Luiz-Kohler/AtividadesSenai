<template>
  <div class="hello">
    <input type="text" placeholder="Digite a placa do carro" v-model="PLACA" />
    <button @click="buscaMultas">Buscar</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "buscaPlacas",
  data: function() {
    return {
      multas: [],
      PLACA: ""
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/multas.json")
      .then(Listamultas => (this.multas = Listamultas.data));
  },
  methods: {
    buscaMultas: function() {
      this.$store.state.multasVeiculos = this.multas.filter(
        multa => multa.PLACA == this.PLACA
      );
      this.$router.push("/inflacoes");
    }
  }
};
</script>
<style>
li {
  margin-top: 30px;
}
</style>