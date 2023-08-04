const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "production",
  // devtool: "source-map", // <<--- This is for pro don't do such thing if it's not needed stick with mean and lean code.
  // mode: "development",
  // devtool: "inline-source-map",
  entry: {
    main: "./entry.js",
  },
  output: {
    iife: false,
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // watch: true,
  watchOptions:{
    // ignored:/node_modules/
    // ignored:[path.resolve(__dirname,'node_modules')]
    // ignored:['**/node_modules','**/src/info.js']
    ignored:['**/node_modules']
  },
  devServer:{
    port:8080, hot: true,
    watchFiles:['**/src/backend/*'],
    static:[
      {
        directory:path.resolve(__dirname,'public'),
        watch:true,
        publicPath:'/'
      },
      {
        directory:path.resolve(__dirname,'style'),
        watch:false,
        publicPath:'/style/',
        serveIndex:false,
        staticOptions:{
          index:'about.html'
        }
      }
    ]
  }
};
