import axios from "axios"

const instance = axios.create({
baseURL: "test.nl"
});

export default instance;