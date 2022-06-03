module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/styles/abstracts/_variables.scss";
        `,
      },
    },
  },
};
