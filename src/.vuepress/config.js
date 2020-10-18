
module.exports = {
    title: "Github Pages con VuePress",
    description: "Pruebas para generar tus GitHub Pages",
    base: process.env.VUEPRESS_BASE || '/',
    themeConfig: {
        "logo": "/assets/img/logo.png",
        "nav": [
            {
                "text": "Home",
                "link": "/"
            },
            {
                "text": "Proyectos",
                "link": "/#proyectos"
            },
            {
                "text": "Contacto",
                "link": "/contact"
            },
            {
                "text": "Github",
                "link": "https://github.com/atorrescogollo"
            }
        ],
        "sidebar": [
            {
                "title": "Home",
                "path": "/",
                "collapsable": true,
                "children": []
            },
            {
                "title": "proyecto1",
                "path": "/proyecto1/",
                "collapsable": true,
                "children": []
            },
            {
                "title": "proyecto2",
                "path": "/proyecto2/",
                "collapsable": true,
                "children": []
            },
            {
                "title": "proyecto3",
                "path": "/proyecto3/",
                "collapsable": true,
                "children": []
            },
            {
                "title": "proyecto4",
                "path": "/proyecto4/",
                "collapsable": true,
                "children": []
            }
        ]
    }
}
