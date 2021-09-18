export default class PageBuilder {

    reference = "#app";

    setPageTitle = function(title) {
        document.title = title;
    }

    createMenu = function(menuLinks, route) {

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
                    <input class="search" type="search">
                </div>
            </div>
        </header>
        `);
      
        $(this.reference).append(menu);
    }

    createCarousel = function(items) {

        var carouselItems = '';

        items.forEach((el) => {
            carouselItems = carouselItems + `
                <div class="carousel-item">
                    <div class="carousel-item-background">
                        <div class="parallax">
                            <img src="`+ el.image +`" alt="`+ el.alt +`">
                        </div>
                    </div>
                    <div class="carousel-item-content">
                        <h1>`+ el.title +`</h1>
                        <h2>`+ el.subtitle +`</h2>
                    </div>
                </div>
            `
        })

        var carousel = $(`
        <section class="carousel">
        <div class="carousel-arrows">
            <div class="left">
                <svg class="arrow-icon left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
            </div>
            <div class="right">
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
            </div>
        </div>
        <div class="carousel-container">
            `
            + carouselItems +
            `
        </div>
    </section>
        `)

        $(this.reference).append(carousel);
    }

    createPostsGallery = function(items) {

        var postsGalleryItems = '';

        items.forEach((el) => {
            postsGalleryItems = postsGalleryItems + `
                <div class="posts-gallery-item">
                    <div class="posts-gallery-item-image">
                        <img src="`+ el.image +`" alt="`+ el.alt +`">
                    </div>
                    <div class="posts-gallery-item-content">
                        <h2>`+ el.title +`</h2>
                        <p>`+ el.text +`</p>
                    </div>
                </div>
            `;
        })

        var postsGallery = $(`
            <section class="posts-gallery-carousel container-grid">
                <div class="posts-gallery-carousel-arrows">
                    <div class="left">
                        <svg class="arrow-icon left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                        </svg>
                    </div>
                    <div class="right">
                        <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                        </svg>
                    </div>
                </div>
                <div class="posts-gallery-carousel-container">
                    `
                    + postsGalleryItems +
                    `
                </div>
            </section>
        `);

        $(this.reference).append(postsGallery);
    }
}