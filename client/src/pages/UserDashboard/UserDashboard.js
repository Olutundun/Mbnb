import React, { Component } from "react";
import "./UserDashboard.css";
import axios from "axios";
//import Modal from "../../components/Modal";
//import RentalModal from "../../components/Modal";
// import { striped, bordered, hover } from 'react-bootstrap';
// import Modal from "./src/components/Modal/index.js";

class UserDashboard extends Component {
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

  handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("submitted!")
    const formData = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      cost: this.state.cost,
      category: this.state.category,
      image: this.state.images
    }
    console.log(formData);
    console.log(formData.itemName);
    axios.post("api/items", formData)
      .then(function (response) {
        console.log(response)
      }).catch(function (err) {
        console.log(err)
      })

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    //console.log("value is " + value);
  };

  render() {
    return (
      <div className="container mainContainer p-5">
        <h1>Your Posted Items</h1>
        <table className="table table-dark table-striped table-bordered table-hover" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>Image</th>
              <th>Cost per day</th>
              <th>Description</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post =>
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.itemName}</td>
                <td>{post.images}</td>
                <td>{post.cost}</td>
                <td>{post.itemDescription}</td>
                <td>{post.category}</td>
              </tr>
            )}
          </tbody>
        </table>

        <br></br>



        <button onClick={this.toggleModal}>
          Open the modal
        </button>





        <form>
          <div className="container form-group postForm">
            <button className="btn btn-dark">post new rental</button>
            <br></br>
            <br></br>
            <label htmlFor="exampleInputName">Item Name</label>
            <input name="itemName" value={this.state.itemName} onChange={this.handleInputChange} type="name" className="form-control" id="exampleInputItem" aria-describedby="emailHelp" placeholder="Enter Item name"></input>

            <label htmlFor="exampleInputDescription">Item description</label>
            <input name="itemDescription" value={this.state.itemDescription} onChange={this.handleInputChange} type="description" className="form-control" id="exampleInputDescription" placeholder="Enter Item Description"></input>

            <label htmlFor="exampleInputPassword1">Cost</label>
            <input name="cost" value={this.state.cost} onChange={this.handleInputChange} type="description" className="form-control" id="exampleInputDescription" placeholder="Average Cost"></input>

            <label htmlFor="exampleFormControlSelect1">Category select</label>
            <select name="category" value={this.state.category} onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
              <option>Guitar/Base</option>
              <option>Drum sets</option>
              <option>DJ Equipment</option>
              <option>Stage lighting</option>
              <option>Keyboards</option>
            </select>
            <p>Upload an Image</p>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"></input>
              <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
              <br></br>
              <br></br>
              <button type="upload" className="btn btn-dark">Upload</button>
            </div>
            <br></br>
            <br></br>
            <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default UserDashboard;