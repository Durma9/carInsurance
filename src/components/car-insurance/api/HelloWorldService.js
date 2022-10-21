import axios from "axios"

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/api/hello')
    }
}

export default new HelloWorldService()