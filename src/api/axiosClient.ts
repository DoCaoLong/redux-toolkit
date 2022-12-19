import axios, { ParamsSerializerOptions } from "axios";
import { identity, pickBy } from "lodash";
import queryString from "query-string";
// export const baseURL = process.env.REACT_APP_API_TEST;
export const baseURL = process.env.REACT_APP_API_PRO;
// export const baseURL = process.env.REACT_APP_API_PRO;
const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    paramsSerializer: {
        encode: (param: any): any => {
            // return `?${new URLSearchParams(
            //     pickBy(param, identity)
            // ).toString()}`;
        },
        serialize: (params: any) =>
            queryString.stringify(pickBy(params, identity)),
        indexes: false,
    },
});
axiosClient.interceptors.request.use(async (config) => {
    return config;
});
axios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);
export default axiosClient;
