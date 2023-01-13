import axios from "axios";
import { identity, pickBy } from "lodash";
import queryString from "query-string";
// export const baseURL = process.env.REACT_APP_API_TEST;
export const baseURL = process.env.REACT_APP_API_PRO;
// export const baseURL = process.env.REACT_APP_API_PRO;

// instance
const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },

    // custom params gửi lên server (paramString -> )
    paramsSerializer: {
        // mã hóa payload
        // encode: (param: any): any => {
        //     // return `?${new URLSearchParams(
        //     //     pickBy(param, identity)
        //     // ).toString()}`;
        // },
        serialize: (params: any) =>
            queryString.stringify(pickBy(params, identity)),
        indexes: false,
    },
});
// interceptors trung gian giữa server và client
// interceptors reques gửi lên server
axiosClient.interceptors.request.use(
    async (config: any) => {
        return config;
        // config trc khi gửi lên server
    },
    (error: any) => {
        throw error;
    }
);
// interceptors response từ server trả về
// custom chỉ nhận duy nhất trường data trong obj đc trả về
axiosClient.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        throw error;
    }
);
export default axiosClient;
