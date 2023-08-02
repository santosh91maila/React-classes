
var HtmlWebpackPlugin=require('html-webpack-plugin');

var htmlEntryPlugin=new HtmlWebpackPlugin({
    template:'src/index.html'
})


var webPackModule={
    entry: ["@babel/polyfill", "./src/index.js"],
    module:{
        rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        },
        {
            test:/\.css$/,
            use:{
                loader:'style-loader'
            }
        }
    ]
   },
   plugins:[htmlEntryPlugin]
}

module.exports=webPackModule;