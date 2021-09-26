export default function (footerItems, reference) { 

    var footerItemsContent = '';

    footerItems.forEach((item) => {
        footerItemsContent = footerItemsContent + `
            <div class="footer-item">
                <h3>`+ item.title +`</h3>
                `;
                if (item.content) {
                    var content = item.content;
                    content.forEach((cont) => {
                        if (cont.footerPosts) {
                            footerItemsContent = footerItemsContent + `
                            <div class="footer-posts">
                            `;
                            cont.footerPosts.forEach((post) => {
                                footerItemsContent = footerItemsContent + `
                                    <div class="footer-post-item">
                                        <a href="#"><p>`+ post.text +`</p></a>
                                        <div class="footer-post-item-data">
                                            <i class="bi bi-clock"></i> <span>`+ post.date +`</span>
                                        </div>
                                    </div>
                                `;
                            });
                            footerItemsContent = footerItemsContent + `
                            </div>
                            `;
                        }
                        if (cont.tags) {
                            footerItemsContent = footerItemsContent + `
                            <div class="tags">
                                <p>
                            `;
                            cont.tags.forEach((tag) => {
                                footerItemsContent = footerItemsContent + `
                                    <a href="`+ tag.link +`" style="font-size: `+ tag.size +` ;">`+ tag.name +`</a>
                                `;
                            });
                            footerItemsContent = footerItemsContent + `
                                </p>
                            </div>
                            `;
                        }
                        if (cont.footerInfo) {
                            footerItemsContent = footerItemsContent + `
                            <div class="footer-info">
                            `;
                            cont.footerInfo.forEach((info) => {
                                footerItemsContent = footerItemsContent + `
                                    <div class="footer-info-item">
                                        <i class="bi `+ info.icon +`"></i>&nbsp&nbsp<span>`+ info.info +`</span>
                                    </div>
                                `;
                            });
                            footerItemsContent = footerItemsContent + `
                            </div>
                            `;
                        }
                        if (cont.text) {
                            cont.text.forEach((innertext) => {
                                footerItemsContent = footerItemsContent + `
                                <p>
                                    `+ innertext.phrase +`
                                </p>
                                `;
                            });
                        }
                    })
                }
        footerItemsContent = footerItemsContent + `
            </div>
        `;
    })

    var footer = $(`
        <footer class="container-grid">
            <div class="footer-items-container">
                `+ footerItemsContent +`
            </div>
        </footer>
    `);

    $(reference).append(footer);
}