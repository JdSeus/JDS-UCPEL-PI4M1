export default function (copyright, socialmedia, reference) { 

    var socialMediaItems = '';

    socialmedia.forEach((el) => {
        socialMediaItems = socialMediaItems + `
            <div class="social-item">
                <a href="`+ el.link +`"><ion-icon name="`+ el.icon +`"></ion-icon></a>
            </div>
        `;
    })

    var copyrightAndSocial = $(`
        <section class="copyright-and-social">
            <div class="copyright-and-social-items-container ">
                <div class="copyright-and-social-item">
                    <div class="copyright">
                        <p>`+ copyright +`</p>
                    </div>
                </div>
                <div class="copyright-and-social-item">
                    <div class="social-media">
                        `+ socialMediaItems +`
                    </div>  
                </div>
            </div>
        </section>
    `);

    $(reference).append(copyrightAndSocial);
}