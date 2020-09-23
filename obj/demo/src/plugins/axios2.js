import axios from 'axios';
import Vue from 'vue'

//劫持 拦截器
//请求拦截
axios.interceptors.request.use(function (config) {
	
    // 做一些请求前的拦截，  config== rquerst config
	console.log('拦截器','请求')
		
   config.headers={token:'1234567890123456'};
   return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 响应拦截

axios.interceptors.response.use(function (response) {
	
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
	console.log('拦截器','拦截')
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });