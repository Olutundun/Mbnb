import React, { Component } from "react";
import "./Amplifiers.css";
import { Link } from "react-router-dom";

class Amplifiers extends Component {
    constructor(props) {
        super(props);
        fetch('/api/category/Amplifiers')
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
                <div id="jumbo-img" className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 id="amp-name"className="display-4">Amplifiers</h1>
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

export default Amplifiers;