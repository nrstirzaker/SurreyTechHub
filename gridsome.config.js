const tailwind = require('tailwindcss')


const postcssPlugins = [
  tailwind(),
]


module.exports = {
    siteName: 'Surrey Tech Hub',
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}