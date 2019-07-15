import axios from 'axios';

const host = "http://localhost:4000/api";
//Set the token for authorization of users
export const setToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

// Method to fetch data from the server api
export const call = async (method, path, data) => {
    const response = await axios[method](`${host}/${path}`, data);
    // The actual response in held in the data property of response.
    // Response has extra properties like headers and others
    return response.data;
}

export default {
    call,
    setToken
};