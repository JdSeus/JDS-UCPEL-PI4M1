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

    general = {
        footer: {
            footerItems: [
                {
                    title: "Popular Posts",
                    content: {
                        footerPosts: [
                            {text: "Lorem Ipsum is simply dummy text of the printing.", date: "25-Semptember 2013"},
                            {text: "Lorem Ipsum is simply dummy text of the printing.", date: "25-Semptember 2013"}
                        ]
                    }
                },
                {
                    title: "Tags",
                    content: {
                        tags: [
                            {name: "apps", link:"#", size:"16px"},
                            {name: "blog", link:"#", size:"32px"},
                        ]
                    }
                },
                {
                    title: "Tags",
                    content: {
                        text: [
                            {phrase: "There are many variation of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
                            {phrase: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."},
                        ]
                    }
                },
                {
                    title: "Get in touch",
                    content: {
                        text: [
                            {phrase: "Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
                        ],
                        footerInfo: [
                            {icon: "", info: "Texas, US"},
                            {icon: "", info: "email@email.com"},
                            {icon: "", info: "890-09880-45590"},
                        ]
                    }
                },
            ]
        },
        copyrightAndSocial: {
            copyright: "© "+ new Date().getFullYear() + " Web World. All rights reserved. Theme by cssautther",
            socialmedia: [
                {icon: "logo-rss", link: "#"},
                {icon: "logo-facebook", link: "#"},
                {icon: "logo-twitter", link: "#"},
                {icon: "logo-linkedin", link: "#"},
            ]
        }
    }

}