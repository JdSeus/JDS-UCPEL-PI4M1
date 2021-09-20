export default function (aboutTitle, aboutSubtitle, aboutText, reference) { 

    var text = '';

    aboutText.forEach((phrase) => {
        text = text + `
            <p>
                `+ phrase.phrase +`
            </p>
        `;
    })

    var about = $(`
        <section class="about container-grid">
            <div class="section-header">
                <h2 class="section-title">
                    `+ aboutTitle +`
                </h2>
                <p class="section-subtitle">
                    `+ aboutSubtitle +`
                </p>
            </div>
            <div class="section-text">
                `+ text +`
            </div>
        </section>
    `);

    $(reference).append(about);
}