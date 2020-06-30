module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_breakpoints.scss";
          @import "@/scss/_grid.scss";
          @import "@/scss/_layout.scss";
          @import "@/scss/_typo.scss";
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
};
