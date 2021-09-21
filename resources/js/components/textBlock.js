export default function (blockTitle, blockSubtitle, blockText, reference) { 

    var text = '';

    blockText.forEach((phrase) => {
        text = text + `
            <p>
                `+ phrase.phrase +`
            </p>
        `;
    })

    var block = $(`
        <section class="text-block container-grid">
            <div class="section-header">
                <h2 class="section-title">
                    `+ blockTitle +`
                </h2>
                <p class="section-subtitle">
                    `+ blockSubtitle +`
                </p>
            </div>
            <div class="section-text">
                `+ text +`
            </div>
        </section>
    `);

    $(reference).append(block);
}