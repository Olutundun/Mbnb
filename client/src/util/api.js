// to make request to api and get data back
import axios from 'axios';

export default{
    //get all items
    getItems: function() {
        return axios.get("/api/items")
    },
    // get items with the id
    createUser: function() {
        return axios.get("/api/users")
    },
    postItem: function() {
        return axios.post("/api/items")
    },
}