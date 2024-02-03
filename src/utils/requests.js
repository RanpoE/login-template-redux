import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const get = async (url, query) => {
    const url_query = query.map((item) => `${item.key}=${item.value}`).join("&");
    const request_url = `${url}?${url_query}`;
    const response = await api.get(request_url);
    return response.data;
}

const post = async (url, data) => {
    const response = await api.post(url, data);
    return response.data;
}

export { get, post };
