const mainMenu = [
    {
        name: "explore",
        label: "Explore",
        to: "",
        hasSubMenu: true,
        dropDown: 'drop-2',
        menus: [
            {
                name: "explore artworks",
                label: "Explore Artworks",
                to: "/artworks",
            },
            {
                name: "explore artists",
                label: "Explore Artists",
                to: "/artists",
            },
        ]
    },
    {
        name: "about",
        label: "About",
        to: "/about-us",
        hasSubMenu: false,
    },
    {
        name: "how it works",
        label: "How it Works",
        to: "/how-it-works",
        hasSubMenu: false,
    },
    {
        name: "community",
        label: "Community",
        to: "",
        hasSubMenu: true,
        dropDown: 'drop-5',
        menus: [
            {
                name: "help center",
                label: "Help Center",
                to: "/help-center",
            },
            {
                name: "contact us",
                label: "Contact Us",
                to: "/contact-us",
            }
        ]
    },
]

export default mainMenu
