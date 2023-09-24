/** @type {import('theme-scss/lib/config').Config} */
const baseAuthor = {
    name: 'Modern Indicators',
    author: 'LuckFire',
    version: '2.2.4',
    description: 'Updates Discord\'s indicators to feel more modern.'
}

export default {
    baseImport: 'https://discord-extensions.github.io/modern-indicators/src/source.css',
    fileName: 'modern-indicators',
    userstyle: {
        ...baseAuthor,
        namespace: 'https://github.com/discord-extensions/modern-indicators',
    },
    bdmeta: {
        ...baseAuthor,
        source: 'https://github.com/discord-extensions/modern-indicators',
        invite: 'vYdXbEzqDs',
        authorId: '399416615742996480',
        updateUrl: 'https://discord-extensions.github.io/modern-indicators/clients/modern-indicators.theme.css'
    },
    base: {
        target: 'src/source.scss',
        output: 'src',
        source: 'source'
    },
    dist: {
        target: 'src/source.scss',
        output: 'clients'
    },
    dev: {
        target: 'src/source.scss'
    }
}