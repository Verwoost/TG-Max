import axios from "axios"

export const instance = axios.create({
    baseURL: "https://stoplight.io/mocks/tg-maxserv-3/maxserv-train-app/100750850"
});

