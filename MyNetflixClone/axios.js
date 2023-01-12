import axios from "axios";


const instance = axios.create({
            baseURL: "https://api.theMOviedb.org/3"

})

export default instance;