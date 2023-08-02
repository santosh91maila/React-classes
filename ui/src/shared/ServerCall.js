import axios from "axios";
const baseUrl="http://localhost:2020/"

axios.interceptors.request.use(
(req) => {
    if(sessionStorage.token){
        req.headers.authorization=sessionStorage.token
    }
    return req;
}, 
(error) => {
    return Promise.reject(error);
}
);
axios.interceptors.response.use(
(response) => {
    return response;
},
(error) => {
    return Promise.reject(error.message);
}
);
class ServerCall{
    static fnSendGet(url){
       return  axios.get(baseUrl+url)
    }
    static fnSendPost(url,data){
       return axios.post(baseUrl+url,data)
    }
    static fnSendPut(url,data){
        return axios.put(baseUrl+url,data)
    }
    static fnSendDelete(url,data){
        return axios.delete(baseUrl+url,data)
    }
}

export default ServerCall