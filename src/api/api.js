import * as axios from "axios"

const server = axios.create()

const API = {
    getQuestions(size = 10) {
        // console.log("API: Continuing")
        return server.get(`https://opentdb.com/api.php?amount=${size}&encode=base64`)
            .then(response => response.data)
    }
}

export default API
