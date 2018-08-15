module.exports = {
    title: 'Pharma - Styles & Guidelines Documentation ',
    description: 'Conceptual Desing Baseline',
    lastUpdated: 'Last Updated',
    port: 8081,
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    head: [
        ['link', { rel: 'icon', href: `/hero.png` }]
    ],
    themeConfig: {
        editLinks: true,
        displayAllHeaders: true,
        sidebar: [
          {
            title: 'UI/UX',
            collapsable: false,
            children: [ 
                '/intro',
                '/style_guides',
             ]
          },
          {
            title: 'Vistas',
            collapsable: false,
            children: [
                '/base_layout',
                'landing_page'
            ]
          }
        ],
        docsDir: 'docs'
    }
}