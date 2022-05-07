/* eslint-disable */
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
</div>
</template>
<script>
import ButtonVue from './ButtonVue.vue';

export default {
  name: 'app',
  components: {
    ButtonVue,

  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
