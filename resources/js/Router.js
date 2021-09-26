import Home from './pageBuilders/Home.js';
import About from './pageBuilders/About.js';
import Services from './pageBuilders/Services.js';
import Related from './pageBuilders/Related.js';
import Contact from './pageBuilders/Contact.js';

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
                case 'noresults':
                    //Contact.contactBuilder(this.route);
                    break;
                case 'home':
                  Home.homeBuilder(this.route);
                  break;
                case 'about':
                  About.aboutBuilder(this.route);
                  break;
                case 'services':
                    Services.servicesBuilder(this.route);
                    break;
                case 'related':
                    Related.relatedBuilder(this.route);
                    break;
                case 'contact':
                    Contact.contactBuilder(this.route);
                    break;
                default:
                  console.log(`Rota inválida!`);
            }
        } 
    }
}
