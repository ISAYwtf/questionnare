import * as axios from "axios"

const server = axios.create({
    baseURL: "https://opentdb.com/api.php?"
})

const API = {
    getQuestions(size = 10) {
        return server.get(`amount=${size}`).then(response => console.log("response:", response))
    }
}

export default API
