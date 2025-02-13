import axios from "axios";

const api = axios.create({
  baseURL: "http://10.64.77.108:8000", 
  withCredentials: true,    
  headers: {
    'Access-Control-Allow-Origin': '*',  
    'Accept':'application/json',      
    'Content-Type': 'application/json',
  },
});

// // Interceptor สำหรับเพิ่ม Token (ถ้ามี Authentication)
// api.interceptors.request.use(
//   async (config) => {
//     // ตัวอย่าง: ถ้ามี token ใน localStorage ก็ดึงมาใส่ headers
//     const token = ""; // ใส่โค้ดดึง Token ที่นี่
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
