/* No components.js conseguimos acessar no app.vue apenas referenciando
o nome da tag do componente */
/* eslint-disable */
import Vue from 'vue';

/* método que já vem no Vue que recebe dois parâmetros:o primeiro que é o id.
podemos reaproveitar o metodo buttonstring e colocar
aqui nesse metodo e chamar ele la no Appvue.vue */

Vue.component('ButtonString', {
    template: '<button @click="clicar">Click ButtonTemplateVue {{count}} times </button>',
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
});

Vue.component('ButtonTemplateString', {
        template: '<button @click="clicar">Click ButtonTemplateVue {{count}} times </button>',
        data() {
            return {
                count: 0,
            };
        },
        methods: {
            clicar() {
                // eslint-disable-next-line no-plusplus
                this.count += 1;
            },
        },
    })
    //declarar o x-template:
Vue.component('Button-x-template', {
    template: '#button-x-template',
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        clicar() {
            // eslint-disable-next-line no-plusplus
            this.count += 1;
        },
    },
})

//declarar o inline template:
Vue.component('ButtonInlineTemplate', {
    data() {
        return {
            count: 0,

        };
    },
    methods: {
        clicar() {
            this.count++;
        },
    },
})

//declarar o Render:
Vue.component('ButtonRender', {
        data() {
            return {
                count: 0,

            };
        },
        methods: {
            clicar() {
                this.count++;
            },
        },
        //vai receber uma função para rendeirizar la no template do App.vue:
        render: function(createElement) {
            //e vai retornar a execução da função createElement:
            return createElement(
                //vai receber uma tag  como parâmetro. no nosso caso criaremos a tag button:
                'button',
                //recebe tb uma propriedade como parâmetro. no nosso caso criaremos o evento click do button:
                {
                    on: {
                        clicar: () => this.count++

                    }
                }, [
                    //e recebe como terceiro parametro o texto o qual queremos rendeirizar na tela:

                    `Click ButtonRender ${this.count} times`
                ]
            );
        }
    })
    // declarar o JSK.Tambem recebe uma funcao render() so que no caso  insere a funcçao direto:
Vue.component('ButtonJSK', {
    data() {
        return {
            count: 0,

        };
    },
    methods: {
        clicar() {
            this.count++;
        },
    },
    render() {
        return (

            <
            button onClick = { this.clicar } >
            Click ButtonJSK { this.count }
            times <
            /button>

        )
    }
});