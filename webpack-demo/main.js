
//第一步 引入Jquery ES6提供的导入模块的新方式
//和node中导包方式一样 const express = require('express')

//ES6新语法支持引入 css文件
import $ from 'jquery'

//引入vue
import Vue from 'vue'
//导入login.vue文件
import login from './src/login.vue'

import './src/css/index.css'


let vm = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    },
    render: ten => ten(login)
})
$(function(){
    $('li:even').css('backgroundColor','pink')
    $('li:odd').css('backgroundColor','blue')
})

