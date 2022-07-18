module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
            @import "src/scss/style.scss";
            @import "src/scss/base/mixins.scss";
            @import "src/scss/chess/chess.scss";
            @import "src/scss/base/settings.scss";
          `,
      },
    },
  },
};
