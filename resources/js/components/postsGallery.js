export default function (items, reference) { 
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

    $(reference).append(postsGallery);
}