<template>
  <div id="app">
<ButtonVue></ButtonVue>
<ButtonString></ButtonString>
<ButtonTemplateString></ButtonTemplateString>
<Button-x-template></Button-x-template>
<!--fazendo o Inline template:-->
<ButtonInlineTemplate inline-template>
<button @click="clicar">
Click ButtonInlineTemplatesVue {{count}} times
</button>
</ButtonInlineTemplate>
<!--fazendo o Render-->
<ButtonRender></ButtonRender>
<ButtonJSK></ButtonJSK>
<!--para imprimir o template na tela com a função click em variaveis iniciadascom $ e undeline-->
<!--precisamos colocar o $data na frente do count++-->
<button @click="count3.x++">Click</button>
 {{ count3 }}
 <!--para executar a variável iniciada com '$' coloca se o $data na frente-->
 {{$data.$count1}}
 <!--para executar a variável iniciada com 'underline' coloca se o $data na frente-->
 {{ $data._count2}}
</div>
</template>

<script>
import ButtonVue from './ButtonVue.vue';

export default {
  name: 'app',
  components: {
    ButtonVue,
  },
  // componente data() armazena variaveis.É uma função que retorna uma variável
  data() {
    return {
      count: 2, //= >aceita normalmente
      $count1: 4, //= >aceita somente de declarar o $data no binding.
      // eslint-disable-next-line vue/no-reserved-keys
      _count2: 6, //= > aceita somente se declarar o $data. no binding
      count3: {
        x: 0, // => podemos declarar uma propriedade dentro do objeto
      },
    };
  },
  // função mounted() é colocado quando o componente for montado.
  // Faz parte de um ciclo de vida do Vue.É um método que acessa as variáveis do data()
  // possui métodos getters and setter dentro dele
  /* No gancho mounted,
você terá acesso completo ao componente reativo, modelos e DOM renderizado */
  mounted() {
    this.$set(this.count3, 'y', 1); // no nosso caso , o componente reativo é o count3:
    // eslint-disable-next-line max-len
    //= > podemos colocar varias outras propriedades dentro de um mesmo objeto(count3)
    this.count3 = { ...this.count3, ...{ a: 1, b: 2 } };/* recebe uma copia dele mesmo como primeiro
parâmetro e as propriedades que eu quero colocar. */
  },

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
