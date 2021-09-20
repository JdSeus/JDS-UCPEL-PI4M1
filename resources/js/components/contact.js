export default function (contactTitle, contactSubtitle, button, contactFields, reference) { 

    var inputs = '';

    contactFields.forEach((el) => {
        if (el.type != "textarea") {
            inputs = inputs + `
                <div class="form-input">
                    <label class="form-label" for="`+ el.nome +`">
                        `+ el.label +`
                    </label><br>
                    <input type="`+ el.type +`" name="`+ el.nome +`" id="`+ el.id +`"
                    `;
                        if (el.required) {
                            inputs = inputs + 'required';
                        }
                    inputs = inputs + `
                    >
                </div>
            `
        } else {
            inputs = inputs + `
            <div class="form-input">
                <label class="form-label" for="`+ el.nome +`">
                    `+ el.label +`
                </label>
                <br>
                <br>
                <textarea name="`+ el.nome +`" id="`+ el.id +`" 
                `;
                    if (el.required) {
                        inputs = inputs + 'required';
                    }
                inputs = inputs + `
                ></textarea>
            </div>
        `
        }

    })

    var contact = $(`
        <section class="contact container-grid">
            <div class="section-header">
                <h2 class="section-title">
                    `+ contactTitle +`
                </h2>
                <p class="section-subtitle">
                    `+ contactSubtitle +`
                </p>
            </div>
            <form action="#" method="POST" id="contatoForm">
                `+ inputs +`
                <button type="submit">`+ button +`</button>   
            </form>
        </section>
    `);

    $(reference).append(contact);
}