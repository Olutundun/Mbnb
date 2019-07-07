import React, { Component } from "react";
import "./Drums.css";


class Drums extends Component {
    constructor(props) {
        super(props);
        fetch('http://localhost:3001/api/category/Drums')
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
                <div className="jumbotron jumbotron-fluid banner">
                    <div className="container">
                        <h1 className="display-4">Drums</h1>
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
                                <button>Rent Me!</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )

    }
}

export default Drums;