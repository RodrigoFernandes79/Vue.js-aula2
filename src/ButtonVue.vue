/* eslint-disable */

<!-- template: onde ficam o HTML-->
<template>
<button @click="clicar">
Click ButtonVue {{count}} times
</button>

</template>
<!--script é onde a gente exporta , faz os imports e faz configuraçoes de vue-->
<!--tudo o que tiver de externo e quiser colocar no componente ,colocamos no script-->
<!--coloca-se sempre um 'name' para referenciar ele-->
<script>
export default {
  name: 'ButtonVue',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clicar() {
      this.count += 1;
    },
  },
};
</script>
<!--Terceiro bloco é o Style onde fazemos a estilização-->
<style lang="scss">

</style>
