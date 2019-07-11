/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import React, { Component } from "react";
import "./Home.css";
import Slide from "../../components/Slider";
import { Link } from "react-router-dom";

class Home extends Component {
   
    componentDidMount() {
        axios.get("/api/items")
          .then(res => this.setState({ posts: res.data}))  
      }
    state = {
        posts: [],
        itemName: "",
        itemDescription: "",
        cost: "",
        category: "",
        images: "",
        slug: ""

    }

    render() {
        return (
            <div>
                <Slide />
                <div className="react-container">
                    <h2 id="category-heading">Categories</h2>
                    <div id="category-div">

                        <div className="img-icon text-center">
                            <a href="./Amplifiers"><img id="image-1" src="/images/amp2.jpg" alt="category"></img></a>
                            <h6 className="m-2">Amplifiers</h6>
                        </div>
                        <div className="img-icon text-center">
                            <a href="./Percussion"><img id="image-1" src="/images/drums.jpg" alt="category"></img></a>
                            <h6 className="m-2">Percussion</h6>
                        </div>
                        <div className="img-icon text-center">
                            <a href="./Keyboards"><img id="image-1" src="/images/keyboard.jpg" alt="category"></img></a>
                            <h6 className="m-2">Keyboards</h6>
                        </div>

                        <div className="img-icon text-center">
                            <a href="./DjEquipment"><img id="image-1" src="/images/technics-table.jpg" alt="category"></img></a>
                            <h6 className="m-2">DJ Equipment</h6>
                        </div>

                        <div className="img-icon text-center">
                            <a href="./guitar"><img id="image-1" src="/images/guitar.jpg" alt="category"></img></a>
                            <h6 className="m-2">Guitar/Bass</h6>
                        </div>
                    </div>
                    <h2 id="category-heading">Browse All</h2>
                    <div className="equipment-div">
                        {this.state.posts.map((post, key) =>
                            <div className="Parent-div text-center" key={key} >
                                <img id="image-top" src={post.images} alt="music equipment"></img>
                                <div id="data-div">
                                    <p>{post.itemName}</p>
                                    <p>Cost: ${post.cost}</p>
                                    <Link to={"/ItemPage/" + post.slug}><button>Find Out More!</button></Link>
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