import axios from "axios";

//Handling unexpected errors globally
// Whenever we have an response with an error this code block will be executed

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if(!expectedError) { // if not an expected error
        console.log(error)
        console.log("An unexpected error occurred.")
    }

    return Promise.reject(error)
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};