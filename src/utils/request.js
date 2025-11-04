// src/utils/request.js
import axios from "axios";

// 1. 创建axios实例（可配置多个实例，对应不同后端服务）
const request = axios.create({
  baseURL: "https://img.xjh.me", // 使用相对路径，通过 Vite 代理转发
  timeout: 5000, // 超时时间（毫秒）
  headers: {
    "Content-Type": "application/json", // 默认请求头
  },
});

// 2. 请求拦截器（发送请求前执行，可添加token、处理参数等）
request.interceptors.request.use(
  (config) => {
    // 示例：添加token到请求头（从localStorage中获取）
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 请求错误处理（如网络错误）
    return Promise.reject(error);
  }
);

// 3. 响应拦截器（收到响应后执行，可统一处理错误、解析数据等）
request.interceptors.response.use(
  (response) => {
    // 示例：只返回响应体中的data字段（根据后端数据结构调整）
    return response.data;
  },
  (error) => {
    // 响应错误处理（如401未授权、500服务器错误）
    if (error.response?.status === 401) {
      // 示例：token过期，跳转到登录页
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// 4. 导出配置好的实例
export default request;
