import React, { Component } from "react";
import "./UserDashboard.css";
// import { striped, bordered, hover } from 'react-bootstrap';


// import Modal from "./src/components/Modal/index.js";

class UserDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch('http://localhost:3001/api/items')
      .then(response => response.json())
      .then(posts => (this.setState({ posts }))
      )
  }

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
                <td>{post.item_name}</td>
                <td>{post.images}</td>
                <td>{post.day_cost}</td>
                <td>{post.item_description}</td>
                <td>{post.category}</td>
              </tr>
            )}
          </tbody>
        </table>

        <br></br>


        <form>
          <div className="container form-group postForm">
          <button className="btn btn-dark">post new rental</button>
        <br></br>
        <br></br>
            <label for="exampleInputName">Item Name</label>
            <input type="name" class="form-control" id="exampleInputItem" aria-describedby="emailHelp" placeholder="Enter Item name"></input>
          
            <label for="exampleInputDescription">Item description</label>
            <input type="description" class="form-control" id="exampleInputDescription" placeholder="Enter Item Description"></input>
         
            <label for="exampleInputPassword1">Cost</label>
            <input type="description" class="form-control" id="exampleInputDescription" placeholder="Average Cost"></input>
          
            <label for="exampleFormControlSelect1">Category select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Guitar/Base</option>
              <option>Drum sets</option>
              <option>DJ Equipment</option>
              <option>Stage lighting</option>
              <option>Keyboards</option>
            </select>
          
          <p>Upload an Image</p>
        
            <div className="custom-file">
            <input type="file" class="custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"></input>
              <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              <br></br>
              <br></br>
            <button type="upload" className="btn btn-dark">Upload</button>
            </div>
              
          
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default UserDashboard;