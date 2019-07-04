import React, { Component } from "react";
import "./UserDashboard.css";
import axios from "axios";


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
    images: "",
    imageUpload: "",
    shown: false

  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  handleImgur = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0]
    this.setState({ imageUpload: file })
  };

  handleImgurUpload = (event) => {
    event.preventDefault();
    let file = this.state.imageUpload

    axios({
      url: 'https://api.imgur.com/3/image',
      method: "POST",
      headers: {
        "Authorization": "Client-ID b54788aa321893d"
      },
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: file
    }).then((res) => {
      console.log(res.data.data.link);
      let photo = res.data.data.link;
      this.setState({ images: photo })
    })

  }
  
  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("submitted!")
    const formData = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      cost: this.state.cost,
      category: this.state.category,
      UserId: this.props.userid,
      images: this.state.images
    }
    console.log(formData);
    console.log(formData.UserId)

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
    var shown = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden = {
      display: this.state.shown ? "none" : "block"
    }

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

        <div>
          {/* When post button is  closed */}
          <div className="container" style={hidden}>
            <h4>Got Some music equipments to rent, post it by clicking button below!</h4>
            <h4>Happy renting!</h4>
          </div>

          <button className="btn btn-dark " onClick={this.toggle.bind(this)}>Post New Rental</button>

          <div className="container" style={shown}>
            <form>
              <div className="container form-group postForm">
                <label htmlFor="itemName">Item Name</label>
                <input name="itemName" value={this.state.itemName} onChange={this.handleInputChange} type="name" className="form-control" id="exampleInputItem" aria-describedby="emailHelp" placeholder="Enter Item name"></input>

                <label htmlFor="itemDescription">Item description</label>
                <input name="itemDescription" value={this.state.itemDescription} onChange={this.handleInputChange} type="description" className="form-control" id="exampleInputDescription" placeholder="Enter Item Description"></input>

                <label htmlFor="cost">Rent per day</label>
                <input name="cost" value={this.state.cost} onChange={this.handleInputChange} type="description" className="form-control" id="exampleInputDescription" placeholder="Rent per day"></input>

                <label htmlFor="category">Category select</label>
                <select name="category" value={this.state.category} onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                  <option >Select Category</option>
                  <option value="Guitar/Base">Guitar/Base</option>
                  <option value="Drum Sets">Drum sets</option>
                  <option value="DJ Equipments">DJ Equipment</option>
                  <option value="Stage Lighting">Stage Lighting</option>
                  <option value="Keyboards">Keyboards</option>
                </select>

                <label htmlFor="itemDescription">Choose some pictures of item you are trying to rent</label>
                <div className="custom-file col-md-8">
                  <input type="file" className="custom-file-input" id="imgur" accept="image/*" data-max-size="5000" onChange={(e) => this.handleImgur(e)}></input>
                  <label className="custom-file-label" htmlFor="customFile">{this.state.imageUpload ? this.state.imageUpload.name : 'Choose file'}</label>
                </div>
                <br></br>
                <br></br>
                <button className="btn btn-success" onClick={(e) => this.handleImgurUpload(e)}>Upload Image</button>

                <br></br>
                <br></br>

                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDashboard;