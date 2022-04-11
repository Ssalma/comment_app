module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
         @import "@/assets/style/variable.scss";
       `,
      },
    },
  },
};
