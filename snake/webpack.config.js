const path=require('path');// 引入一个包
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} =require('clean-webpack-plugin')//每次打包时会清空dist目录
// webpack中所有的配置信息都应该写在module.exports中
module.exports={
    // 指定入口文件
    entry:"./src/index.ts",
    //指定打包文件所在目录
    output:{
        // 指定打包文件的目录
        path:path.resolve(__dirname,'./dist'),
        // 打包后的文件
        filename:'bundle.js',
        // 告诉webpack不要用箭头函数
        environment:{
            arrowFunction:false
        }
    },
    //指定webpack打包时要使用的模块
    module:{
        // 指定要加载的规则
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        "targets":{
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs":"3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader: "ts-loader",
    
                    }
                ],
                exclude: /node_modules/
            },
            // 设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'这是一个自定义的title'
            template:"./src/index.html"//指定网页模板
        })
    ],
    // 用来设置引用模块,规定哪些文件可以作为引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}