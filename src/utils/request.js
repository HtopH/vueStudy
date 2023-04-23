import querystring from "querystring"
import axios from "axios"
const instance=axios.create({
        //网络请求的公共配置
        timeount:5000
})

const errorHandle=(status,info)=>{
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        default:
            console.log(info);
            break;
    }
}

//拦截器
//发送数据之前
instance.interceptors.request.use(
    config=>{
        if (config.method==="post"){
            config.data=querystring.stringify(config.data)
        }
        //config:包含着网络请求的所有信息
        return config;
    },
    error=>{
        return Promise.reject(error)
    }
)

//获取数据之前
instance.interceptors.response.use(
    response=>{
        return response.status===200?Promise.resolve(response):Promise.reject(response)
    },
    error=>{
        const{response}=error;
        //错误处理
        errorHandle(response.status,response.info)
    }
)
 