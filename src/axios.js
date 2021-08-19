import axios from "axios";

const instance = axios.create({
    // insérer dans baseURL l'url de notre API
    baseURL: "http://localhost:5001/clone-ee23e/us-central1/api"
})

export default instance