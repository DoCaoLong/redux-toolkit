import axiosClient from "./axiosClient";

class ApiRoute {
    getOragnizations = (values: any) => {
        const url = "/organizations";
        const params = values;
        return axiosClient.get(url, { params });
    };
}

const api = new ApiRoute();
export default api;
