var path=require('path');
module.exports={
    entry: path.resolve(__dirname,"src/index.js"),
    output:{
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    },
    devServer: {
      publicPath: "/static/",
        stats: { colors: true },
        port: 6060,
        contentBase: "build",
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};
