import axios from "axios";
import React, { Component } from "react";
import "./DjEquipment.css";
import { Link } from "react-router-dom";

class Drums extends Component {
   
    componentDidMount() {
        axios.get("/api/category/DjEquipment")
          .then(res => this.setState({ posts: res.data}))  
      }
    state = {
        posts: [],
        itemName: "",
        itemDescription: "",
        cost: "",
        category: "",
        images: ""
    }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid banner" id="jumbo-img-dj">
                    <div className="container">
                        <h1 id="dj-name" className="display-4">Dj Equipment</h1>
                    </div>
                </div>
                <div className="equipment-div" id="dj-main-background">
                    {this.state.posts.map((post, key) =>
                        <div className="Parent-div" key={key} >
                            <img id="image-top" src={post.images} alt="music equipment"></img>
                            <div id="data-div">
                                <p>{post.itemName}</p>
                                <p>Description: {post.itemDescription}</p>
                                <p>Category: {post.category}</p>
                                <p>Cost: ${post.cost}</p>
                                <Link to={"/ItemPage/" + post.slug}><button>Find Out More!</button></Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )

    }
}

export default Drums;