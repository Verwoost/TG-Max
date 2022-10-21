import axios from "axios"

export const instance = axios.create({
    baseURL: "https://92b5-2a02-fe9-c1f-135a-8d50-4692-54ef-9497.eu.ngrok.io/api/",
    headers: {"ngrok-skip-browser-warning": "69420"}
});

