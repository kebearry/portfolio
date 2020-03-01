module.exports = {
    head: {
        title: 'Rebecca | Application Developer',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Portfolio Site for Rebecca, Application Developer' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    router: {
        // base: '/website/',
    },

    loading: { color: '#487fff' },

    css: [
        '@/assets/scss/main.scss',
    ],

    plugins: [
        '~/plugins/svg-sprite-loader',
        '~/plugins/vue-scrollto',
        { src: '~plugins/ga.js', ssr: false },
    ],

    build: {
        extend (config, { isDev }) {
            if (isDev && process.client) {
            config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
            })
            }
        },
        // vendor: ['axios'],
    },

    env: {
        dribbbleToken: '07d241231bbcab15c7a157563907a41a34496d03b811c16a87fe4c190c772344',
        email: 'kebearry@gmail.com',
    },
};
