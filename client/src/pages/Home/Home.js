/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import "./Home.css";
import Nav from '../../components/Navbar/index';
// import axios from "axios";

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
        return(
        <div className = "react-container">
            <div className="Main-div">
                <div className="logo">
                    {/* <img id="logo-id"src="/images/test-logo.png"/> */}
                    <h1 id="main-logo">Mbnb</h1>
                </div>
            </div>
                < Nav />
            <div className="equipment-div">
                <div id="categories">
                    
                </div>
                    {this.state.posts.map((post, key) =>
                        <div className="Parent-div"key={key} >
                            
                             <img id="image-top"src ={post.images} alt="music equipment"></img>
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
        
     )
    }
}

export default Home;