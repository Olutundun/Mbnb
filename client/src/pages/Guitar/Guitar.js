import axios from "axios";
import React, { Component } from "react";
import "./Guitar.css";
import { Link } from "react-router-dom";

class Guitar extends Component {
    
    componentDidMount() {
        axios.get("/api/category/Guitar")
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
                <div className="jumbotron jumbotron-fluid banner" id="jumbo-guitar">
                    <div className="container">
                        <h1 className="display-4" id="bass-text">Guitars/Basses</h1>
                    </div>
                </div>
                <div className="equipment-div">
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

export default Guitar;