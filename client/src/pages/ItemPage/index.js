import axios from "axios";
import React, { Component } from "react";
import "./style.css"

class ItemPage extends Component {
   
    componentDidMount() {
        axios.get(`/api/item/${this.props.match.params.slug}`)
          .then(res => this.setState({ posts: res.data}))  
      }
    state = {
        posts: [],
    }
    render() {
        console.log(this.props.match.params.slug)
        console.log(this.state.posts);
        const { category, cost, images, itemDescription, itemName, contact } = this.state.posts;
        return (
            <div>
                <h1 id="item-name">{itemName}</h1>
                <div className="container" id="content-body">
                    <img alt="" className="img-fluid" id="main-image" src={images}></img>
                    <div id="text-body">
                        <h4 id="item-description">Description: <br></br>{itemDescription}</h4>
                        <h4 id="cost-day">Cost Per day: ${cost}</h4>
                        <h4 id="category">Category: {category}</h4>
                        <h4 id="contact">Contact renter at: {contact}</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default ItemPage;