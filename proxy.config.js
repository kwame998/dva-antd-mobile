module.exports = {
  '/api': {
    //target:'http://bajiaoke.520igo.com',
    target:'http://localhost:9003/',
    changeOrigin: true,
    "pathRewrite": { "^/api" : "" }
  }
};
