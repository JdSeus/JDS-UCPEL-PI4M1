export default class General {

    title;
    route;
    
    static menuLinks = [
        /*
        {link: "#", text: "Início"},
        {link: "#", text: "Sobre"},
        {link: "#", text: "Serviços Oferecidos"},
        {link: "#", text: "Páginas Relacionadas"},
        {link: "#", text: "Contato"},
        */
    ]

    initializePage = function() {
        this.loadTitleAndRoute();
        this.createMenu();
    }
    

    setTitle = function(title) {
        document.title = title;
        this.title = title;
    }

    loadTitleAndRoute = function() {
        var app = document.querySelector("#app");
        var route = null;
        if (app) {
            route = app.getAttribute('name');
        }
        if (route) {
            this.setTitle(`Projeto Integrador IV - ${route}`);
            this.route = route;
        } else {
            this.setTitle(`Projeto Integrador IV`);
        }
    }

    createMenu = function() {
        let menu = document.querySelector("#menu");
        if (menu) {
            let menuLinks = General.menuLinks;
            menuLinks.forEach(menuLink => {
                let anchor = document.createElement('a');          
                let text = document.createTextNode(`${menuLink.text}`);
                anchor.appendChild(text);
                anchor.href = `${menuLink.link}`;
                menu.appendChild(anchor);
            });
        }
    }



}