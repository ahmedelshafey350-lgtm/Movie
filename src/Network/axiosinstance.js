import axios from "axios";
import { changeLoader } from "../Store/Action/action";
import store from "../Store/store/store.js";
const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})




axiosInstance.interceptors.request.use(function(config){

   
    store.dispatch(changeLoader(true));

    return config ;
   
},function(error){


    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function(response){

    store.dispatch(changeLoader(false));
    return response ;
   
},function(error){


    return Promise.reject(error);
});


export default axiosInstance ;
