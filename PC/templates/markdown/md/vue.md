# vue常用API与options


### vue基本命令
```
# 全局安装 vue-cli
$ npm install --global vue-cli	创建一个基于 webpack 模板的新项目
$ vue init webpack my-project	安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev	启动
$ npm run build	把生成的文件放服务器
```

***
### 全局 API
#### Vue.component
```
注册组件时使用。代码示例如下：
Vue.component('mak-list', {
	props: ['list'],
	template: `
		<ul>
	        <li v-for="item in list">{{item}}</li>
	    </ul>
	`
})
```
#### Vue.use
```
添加插件时使用。代码示例如下：
Vue.use(Vuex)
```

***
### 选项options
#### created
```
一般用在http请求数据上。代码示例如下
created: function() {

    this.$http.get('http://jsonplaceholder.typicode.com/users').then(function(response) {
        this.list1 = response.data;
    });

    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(response) {
        this.list2 = response.data;
    });
}
```