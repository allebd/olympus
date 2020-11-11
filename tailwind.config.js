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
        'about-pattern': "url('/assets/images/About.svg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
