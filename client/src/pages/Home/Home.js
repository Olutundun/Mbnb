/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./Home.css";
// import { Link, Redirect } from "react-router-dom";
import Slide from "../../components/Slider";

class Home extends Component {
    constructor(props) {
        super(props);
        fetch('http://localhost:3001/api/items')
            .then(response => response.json())
            .then(posts => (this.setState({ posts }))
            )
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
                <Slide />
                <div className="react-container">
                <h2 id="category-heading">Categories</h2>
                    <div id="category">
                        <img id="image-1" src="/images/amp.jpg" alt="category"></img>
                        <img id="image-1" src="/images/amp.jpg" alt="category"></img>
                        <img id="image-1" src="/images/amp.jpg" alt="category"></img>
                        <img id="image-1" src="/images/amp.jpg" alt="category"></img>
                        <img id="image-1" src="/images/amp.jpg" alt="category"></img>
                    </div>
                    <h2 id="category-heading">Browse All</h2>
                    <div className="equipment-div">
                        {this.state.posts.map((post, key) =>
                            <div className="Parent-div" key={key} >
                                <img id="image-top" src={post.images} alt="music equipment"></img>
                                <div id="data-div">
                            <p>{post.itemName}</p>
                            <p>Description: {post.itemDescription}</p>
                            <p>Category: {post.category}</p>
                            <p>Cost: ${post.cost}</p>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )

    }
}

export default Home;