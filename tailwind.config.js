module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      "./public/*.html"
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
