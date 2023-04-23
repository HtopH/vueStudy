<template>
  <div class="hello">
    <h3>学习</h3>
    <!--{{}} 这个是文本变量渲染-->
    <p>{{message}}</p>
    <div>{{ rawHtml }}</div>
    <!-- v-html这个属性可以渲染html代码 -->
    <div v-html="rawHtml"></div>
    <!-- 属性Attribute 动态绑定属性 v-bind: 且可以简写成：-->
    <div :id="dynamicId"></div>
    <!-- 使用js 表达式，但必须是单个表达式-->
    <p>{{ num+1 }}</p>
    <p>{{ ok ? 'Yes' : 'No' }}</p>

    <!-- 
      条件渲染 v-if,v-show , v-if 是真正的销毁和重建，v-show 只是简单的隐藏或显示，渲染开销大，切换开销开销小 
    -->
    <p v-if="flag">v-if条件显示</p>
    <p v-else>flag是fasle</p>
    <p v-show="flag">这是v-show</p>

    <!-- 列表渲染 v-for -->
    <ul>
      <li @:click="say(item)" v-for="item in newsList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    
    <!-- 监听事件 v-on(通常缩写为@)来监听DOM事件

    -->
    <button @:click="counter+=1">点击：counter={{ counter
     }}</button>
    <button @:click="clickHandle">按钮</button>
    <button @click="say('hi')">hi</button>
    <button @click="say(' hello')">hello</button>

    <!-- 表单输入绑定  默认是input事件，输入触发
      .lazy（change事件）：回车或者失去焦点的时候才会触发
      .trim 自动过滤用户输入的的首尾空白字符
    -->
    <div>
      <input type="text" v-model.lazy="username">  
      <p>{{ username }}</p>
    </div>
    
    <!-- 组件基础 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      message:"学 习",
      rawHtml:"<a href='http://baidu.com'>嘟嘟</a>",
      dynamicId:1001,
      num:1,
      ok:true,
      flag:false,
      newsList:[
        {
          id:1,
          title:"昨日新闻"
        },
      ],
      counter:1,
      username:""
    }
  },
  methods:{
    clickHandle(event){
      console.log("hahahah");
      this.message="改变了";
      //`event`是原生 DOM event
      event.target.innerHTML="点击之后"
    },
    say(data){
      console.log(data.title)
    }
  }
}
</script>

