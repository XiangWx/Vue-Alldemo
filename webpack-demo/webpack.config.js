//webpack 是基于node构建的

//配置文件 就是js文件 向外暴露对象
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//在webpack添加VueLoaderPlugin插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname,'./main.js'), //入口文件，指定要打包哪个文件
    output:{ //输出文件的相关配置
        path:path.join(__dirname,'./dist'), //指定打包好的文件，输出到哪个目录中去
        filename:'main.js',//指定 输出文件的名称
    },
    devServer:{
        contentBase:path.join(__dirname,'src'), //托管到根路径
        compress:true, //启动压缩
        port:3000, //端口号
        open:true, //自动开启浏览器
        hot: true //开启热更新，如果设置为true 要手动添加HMP插件
    }, 
    plugins:[ //插件配置项
        new webpack.HotModuleReplacementPlugin(),//添加热更新插件
        new HtmlWebpackPlugin({ //帮我们自动生成HTML文件
            template:'./src/index.html',//指定从哪个html文件编译
            filename: 'index.html' //文档写了 默认的就是index.html 可以省略不写
        }),
        new VueLoaderPlugin()
    ],
   module:{
    rules:[ //loader 读取顺序 从右到左
        { test: /\.css$/, use:['style-loader','css-loader']},
            //less-loader
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.(png|jpg|gif|jpeg|bmp|webp)$/,use:['url-loader?limit=8192']},
        {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'},
        {test:/\.vue$/,use:'vue-loader'}
    ]
   },
   resolve:{
    alias:{ //新增 resolve 节点 添加 alias 属性 引入vue之前先取个别名，指向完整版的vue.js文件
        'vue$':'vue/dist/vue.js'
    }
   },
    mode: 'development'//指定为开发模式
}