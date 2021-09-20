export default function (items, reference) { 
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
        <section class="carousel container-grid">
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

        $(reference).append(carousel);
}