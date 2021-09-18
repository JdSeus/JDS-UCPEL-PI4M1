import Home from './Home.js';

export default class Router {

    route;

    //Função para inicializar a página.
    initializePage() {
        this.loadRoute();
        this.callConstructorOfPage();
    }

    //A rota é definida pelo atributo name na div #app do arquivo HTML
    //Aqui será armazenada a rota atual.
    loadRoute() {
        var app = document.querySelector("#app");
        var route = null;
        if (app) {
            route = app.getAttribute('name');
        }
        if (route) {
            this.route = route;
        }
    }

    //Aqui será chamado o builder da rota especifica;
    callConstructorOfPage = function() {
        if (this.route) {
            switch (this.route) {
                case 'home':
                  Home.homeBuilder();
                  break;
                default:
                  console.log(`Rota inválida!`);
            }
        } 
    }
}
