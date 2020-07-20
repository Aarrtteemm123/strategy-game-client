import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "*"
    }
});
