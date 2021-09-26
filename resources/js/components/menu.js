export default function (menuLinks, route, reference) { 
    var linkElements = '';

    menuLinks.forEach((el) => {
        if (el.route == route) {
            linkElements = linkElements + `
                <div class="menu-link active">
                    <a href="`+ el.link +`">`+ el.text +`</a>
                </div>
            `
        } else {
            linkElements = linkElements + `
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
                + linkElements +
                `
            </nav>
            <div class="search-container">
                <input id="searchinput" class="search" type="search"/>
            </div>
        </div>
    </header>
    `);
    
    $(reference).append(menu);
}