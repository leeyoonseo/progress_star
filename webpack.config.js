const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {  
    name : 'progress', 
    mode : 'development',
    devtool : 'eval', 

    resolve : { 
        extensions : ['.js', '.jsx']    
    },  

    entry : { 
        app : ['./app', './main']  
    },  

    module : {      
        rules : [
            {      
                test : /\.jsx/,       
                loader : 'babel-loader',       
                options : {        
                    presets : [
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ], 

                    plugins : [
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ] 
                }    
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            }
        ]  
    },  
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    output : {     
        path : path.join(__dirname, 'dist'), 
        filename : 'app.js',
        publicPath : 'dist'
    }
};