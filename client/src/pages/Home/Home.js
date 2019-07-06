/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./Home.css";
// import axios from "axios";
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
                    <div className="equipment-div">
                        {this.state.posts.map((post, key) =>
                            <div className="Parent-div" key={key} >
                                <img id="image-top" src={post.images} alt="music equipment"></img>
                                <p>{post.itemName}</p>
                                <p>{post.itemDescription}</p>
                                <p>{post.category}</p>
                                <p>{post.cost}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )

    }
}

export default Home;