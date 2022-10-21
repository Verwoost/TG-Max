import axios from "axios"

export const instance = axios.create({
    baseURL: "https://stoplight.io/mocks/maja/rijsoverzicht/101174922/"
});

