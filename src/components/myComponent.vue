<template>
    <h3>我是单文件组件</h3>
    <p>{{ title }} {{ age }}</p>
    <div>
        <button @click="sendClickHandle">点击传递</button>
    </div>
    <!--8个生命周期
        创建时：beforeCreate,created
        渲染时：beforeMount,mounted
        更新时：beforeUpdate,updated
        卸载时：beforUnmount,unmounted
    -->
</template>
<script>
    //组件默认格式
    export default{
        //组件默认格式
        name:"myComponent",
        data(){
            return{
                message:"我是myComponent的数据"
            }
        },
        methods:{
            //自定义事件传递事件，反向传递
            //在app.vue文件再监听自定义事件onEvent，触发函数，获取数据
            sendClickHandle(){
                //参数1：字符串，理论上是随便填，但是需要有具体意义
                //参数2：传递的数据
                this.$emit("onEvent",this.message)
            }
        },
        //props App->myComponent 组件之间的数据传递，这里在与App.vue交互
        //类型：String,Number,Boolean,Array,Object,Function
        props:{
            title:{
                type:String,
                default:""
            },
            age:{
                type:Number,
                default:0
            },
            names:{
                type:Array,
                //数组和对象必须使用函数进行返回
                default:function(){
                    return []
                }
            }
        },
        //生命周期函数
        beforeCreate(){
            console.log("beforeCreate：组件创建之前");
        },
        created(){
            console.log("created:组件创建完成");
        },
        beforeMount(){
            console.log("beforeMount:组件渲染之前");
        },
        mounted(){
            console.log("mounted：组件渲染完成");
            //把网络请求放在这里
        },
        beforeUpdate(){
            console.log("beforeUpdate：组件更新之前");
        },
        updated(){
            console.log("updated：组件更新之后");
        },
        beforUnmount(){
            console.log("beforUnmount：组件卸载之前");
            //把消耗性能的删除掉
        },
        unmounted(){
            console.log("unmounted：组件卸载之后");
        },
    }

</script>
<!-- scoped:如果在style中添加此属性，当前样式只在当前组件生效-->
<style scoped>
    h3{
        color: red;
    }
</style>