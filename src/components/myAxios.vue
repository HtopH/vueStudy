<template>
    <!--
        axios，一个基于promise
    -->
    <p>网络请求</p>
</template>
<script>

//局部引入
import querystring from "querystring"

export default{
    name: "myAxios",
    mounted(){
        //get请求
        this.$axios({
            method:"get",
            url:"http://baidu.com"
        }).then(res=>{
            console.log(res.data);
        })
        //快捷方式
        this.$axios.get("url").then(res=>{console.log(res.data);})


        //post请求
        //querystring，将参数转成字符串
        this.$axios({
            method:"post",
            url:"http://baidu.com",
            data:querystring.stringify({
                uuid:1,
                name:"cc",
                veri:"dd"
            })
        }).then(res=>{
            console.log(res.data);
        })
        this.$axios.post("url",querystring.stringify({
                uuid:1,
                name:"cc",
                veri:"dd"
            })).then(res=>{console.log(res.data);})
    }
}
</script>
<style></style>