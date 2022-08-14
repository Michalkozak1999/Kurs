const path = require("path");
const entryPath = "1_Zadania/Dzien_3/06_Zdarzenia_przekazywanie";
const entryFile = "task0a.js";

module.exports = {
  entry: `./${entryPath}/js/${entryFile}`,
 
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },


  
  // devServer: {
  //   contentBase: path.join(__dirname, `${entryPath}`),
  //   publicPath: "https://build/",
  //   compress: true,
  //   port: 3001
  // },
  module: {
    
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, `${entryPath}`)
    },
    port: 3000,
    // publicPath
    devMiddleware:{
       publicPath: "/build/",
    },
    // hotOnly
    hot: "only",
}

};