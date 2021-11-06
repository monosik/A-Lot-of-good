import axios from "axios";

const BASE_URL = "https://lotofgoods.herokuapp.com/"
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjVhOTdjN2NjYzg1Y2RjZjQyNDFjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDQwNDg4OCwiZXhwIjoxNjM0NDkxMjg4fQ.ij9_ISOGvXcHZaVkIR8pJSZO9zjv65IP_bAzfqH91Lc"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${Token}`}
});