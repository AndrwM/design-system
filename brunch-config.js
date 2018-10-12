module.exports = {
  config: {
    paths: {
      watched: ["design-system"],
    },
    files: {
      stylesheets: {
        joinTo: { 'assets/style.css': 'design-system/manifest.scss'}
      }
    },
    plugins: {
      sass: { mode: "native" }
    }
  }
};