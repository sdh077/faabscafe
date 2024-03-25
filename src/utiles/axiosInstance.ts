import { getCookie } from './cookie';
import { NEXT_PUBLIC_URL } from '@/utiles/constants';

import axios, { AxiosRequestConfig } from 'axios' // 추가

interface APIResponse<T> {
    statusCode: number
    errorCode: number
    message: string
    result: T
    access_token: string
}

const axiosInterceptorInstance = axios.create({
    baseURL: `${NEXT_PUBLIC_URL}/api`, // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    }
});


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // console.log(getCookie('token'))
        // if (getCookie('token')) {
        //     const accessToken = JSON.parse(getCookie('token') ?? '');
        //   if (config.headers) config.headers.token = accessToken;
        // }
        return config;
    },
    (error) => {
        // Handle request errors here

        return Promise.reject(error);
    }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here

        return response;
    },
    (error) => {
        // Handle response errors here

        return Promise.reject(error);
    }
);

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.get<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.post<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const putData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.put<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await axiosInterceptorInstance.delete<APIResponse<T>>(url, config);
        return response.data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error));
    }
};
export default axiosInterceptorInstance; 