import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TodoList: [{
        titulo: "Fazer café"
      }, {
        titulo: "Comprar Pão"
        },{
        titulo: "Jogar Futebol"
      }]
  },
  mutations: {
    
    adicionarTarefa (state, titulo) {
     
      state.TodoList.push(titulo)

    }

     
  },
  actions: {
  },
  modules: {
  }
})
