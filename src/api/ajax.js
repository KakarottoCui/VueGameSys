import axios from 'axios'

export default function ajax(url = '', params = {}, type = 'GET') {
     // 1. 定义promise对象
     let promise;
     return new Promise((resolve, reject)=>{
        // 2. 判断请求的方式
 ms)
        }
        // 3. 返回请求的结果
        promise.then((response)=>{
            resolve(response.data)
        }).catch(error => {
           reject(error)
        })
     })
}
