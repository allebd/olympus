module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero-pattern': "url('/assets/images/Background.svg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
