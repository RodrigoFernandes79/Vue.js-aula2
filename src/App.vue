<template>
  <div id="app">
 <Title />
 <button @click="count++">Click</button>
 {{count}}
</div>
</template>

<script>
import Title from './Title.vue';

export default {
  name: 'App',
  components: {
    Title,

  },
  // componente data() armazena variaveis.É uma função que retorna uma variável
  data() {
    return {
      hello: 'Hello World',
      count: 0,
    };
  },
  beforeCreate() { // ao dar o console log, percebemos que ele nao tem acesso ao data()
    console.log('before Create App');
    console.log(this.hello); // nao aparece no console.log
  },
  created() {
    console.log('Created APP'); // created tem acesso ao data()
    console.log(this.hello); // aparece no console.log. geralmente utilizamos chamadas Api
    // no lifecircle created
  },
  beforeMount() {
    console.log('Before Mount App'); // no beforeMount ainda não tem acesso ao elemento HTML
    console.log(this.$el);
  },
  mounted() {
    console.log('Mounted App');
    console.log(this.$el); // no mounted já temos acesso ao template HTML(<h1>Vue.js</h1>)
  },
  beforeUpdate() {
    console.log('before update App'); // no beforeUpdated ainda nao altera o DOM, ou
    // seja, ainda não rendeirizou o {{count}}
    console.log(this.count);
  },
  updated() {
    console.log('updated App'); // já no updated o DOM foi rendeirizado e occore
    // a alteraçao do DOM. Já mostra as alterações do {{count}}
    console.log(this.count);
  },
  /* uma vez que o elemento foi rendeirizado, ele precisa ser destruído.
o beforeDestroy prepara a destruição do elemento que todos os componentes filhos,
 whatches e event listeners serão destruídos no Destroy */
};

</script>

<style lang="scss">
#app {
display:flex;
align-items: center;
text-align: center;
justify-content: center;
width: 80%;
flex-direction: column;

  color: #2c3e50;
}

</style>
