export default class PageConstructor {

    reference = "#app";

    createMenu = function(pages) {

        var route = 'home';
        var menuLinks = [
            {link: "#", text: "A", selected: true},
            {link: "#", text: "B"},
            {link: "#", text: "Serviços Oferecidos"},
            {link: "#", text: "Páginas Relacionadas"},
            {link: "#", text: "Contato"},
        ]

        var links = '';
        menuLinks.forEach((el) => {
            if (el.selected && el.selected == true) {
                links = links + `
                    <div class="menu-link active">
                        <a href="`+ el.link +`">`+ el.text +`</a>
                    </div>
                `
            } else {
                links = links + `
                    <div class="menu-link">
                        <a href="`+ el.link +`">`+ el.text +`</a>
                    </div>
                `
            }
        })

        var menu = $(`
        <header>
            <div class="header-up">
                <div class="header-logo">
                    <a href="./"><img src="./dist/images/logo.png" alt="Logo da Aplicação"></a>
                </div>
            </div>
            <div class="header-content">
                <nav id="menu">
                    `
                    + links +
                    `
                </nav>
                <div class="search-container">
                    <input class="search" type="search">
                </div>
            </div>
        </header>
        `);
      
        $(this.reference).append(menu);
    }

    appInformation = "teste";

    menuLinks = [
        {link: "#", text: "Início"},
        {link: "#", text: "Sobre"},
        {link: "#", text: "Serviços Oferecidos"},
        {link: "#", text: "Páginas Relacionadas"},
        {link: "#", text: "Contato"},
    ]

    home = {
        title: "Home",
        content: "asdsadsad"
    }


}