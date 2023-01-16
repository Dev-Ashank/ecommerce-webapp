import axios from "axios";

const instance =axios.create({
    baseURL:'http://127.0.0.1:5003/ecommerce-webapp-7919f/us-central1/api'
// baseURL:'https://us-central1-ecommerce-webapp-7919f.cloudfunctions.net'
// 127.0.0.1:5001/ecommerce-webapp-7919f/us-central1/api/}
})
export default instance;