module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      "./public/*.html",
      "./src/js/components/*.vue"
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
