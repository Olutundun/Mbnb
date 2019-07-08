/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./Home.css";
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
          
                <hr></hr>
                <h2 id="category-heading">Categories</h2>
                    <div id="category">
                        
                        <div className="text-center">
                        <a href="./Amplifiers"><img id="image-1" src="/images/amp.jpg" alt="category"></img></a>
                        <h6 className="m-2">Amplifiers</h6>
                        </div>
                        
                        <div className="text-center">
                        <a href="./Percussion"><img id="image-1" src="/images/drums.jpg" alt="category"></img></a>
                        <h6 className="m-2">Percussion</h6>
                        </div>
                        <div className="text-center">
                        <a href="./Keyboards"><img id="image-1" src="/images/keyboard.jpg" alt="category"></img></a>
                        <h6 className="m-2">Keyboards</h6>
                        </div>
                        
                        <div className="text-center">
                        <a href="./Drums"><img id="image-1" src="/images/bass.jpg" alt="category"></img></a>
                        <h6 className="m-2">Drums</h6>
                        </div>

                        <div className="text-center">
                        <a href="./guitar"><img id="image-1" src="/images/guitar.jpg" alt="category"></img></a>
                        <h6 className="m-2">Guitars</h6>
                        </div>

                    </div>
                    <hr></hr>
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
                            <button>Rent Me!</button>
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