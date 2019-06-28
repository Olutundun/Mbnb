// to make request to api and get data back
import axios from 'axios';

export default{
    getAuthId: function(){
        return axios.get("/user/user_data")
    },
    loginUser: function(data){
        return axios.post("/user/Signin")
    },
    //get all items
    getItems: function() {
        return axios.get("/api/items")
    },
    // get items with the id
    getItem: function(id) {
        return axios.get("/api/items" + id)
    }
}