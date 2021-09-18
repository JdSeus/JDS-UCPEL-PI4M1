export default class Content {

    appInformation = "teste";

    menuLinks = [
        {link: "#", text: "Início", route: "home"},
        {link: "#", text: "Sobre", route: "about"},
        {link: "#", text: "Serviços Oferecidos", route: "services"},
        {link: "#", text: "Páginas Relacionadas", route: "related"},
        {link: "#", text: "Contato", route: "contact"},
    ]

    home = {
        title: "Home",
        content: {
            carousel: [
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/montain.jpg", alt: "Montanha"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/forest.jpg", alt: "Floresta"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/sand.jpg", alt: "Areia"},
                {title: "Bem Vindo ao Nosso Site", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac sodales ante.", image: "./dist/images/everest.jpg", alt: "Monte Everest"},
            ],
            postsGallery: [
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/montain.jpg", alt: "Montanha"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/everest.jpg", alt: "Monte Everest"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/forest.jpg", alt: "Floresta"},
                {title: "Lorem Ipsum", text: "Lorem Ipsum", image: "./dist/images/sand.jpg", alt: "Areia"},
            ]
        }
    }
}