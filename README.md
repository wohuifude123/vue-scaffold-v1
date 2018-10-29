# Vue 自定义脚手架
> 作者：刘建

| 指令 | 作用|  
| :----:  | -------- |
| npm run dev | 启动服务端，然后打开地址 http://127.0.0.1:6600/ 可看到首页 |
| npm run build | 将所有文件打包到public文件夹中 |

```
|—— server 服务端文件夹
|—— src 源码文件夹
	|—— pages 多页面文件夹
		|—— home 首页文件夹
			|——main.js 项目构建入口
|—— webpack.base.js webpack 基础配置
|—— webpack.prod.js webpack 生产环境配置
|—— webpack.dev.js 	webpack 开发环境配置
```

### 架手架初始化配置

```
npm init -y

npm install webpack webpack-dev-server -D
```

使用淘宝源安装

```
npm install  --registry=https://registry.npm.taobao.org common-helper-es6
npm install  --registry=https://registry.npm.taobao.org seneca --save-dev
npm install -g nrm --registry=https://registry.npm.taobao.org
```
