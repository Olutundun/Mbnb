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
    shown: false,
    successfulUpload: false,
    slug: "",
    spinner: false
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
    this.setState({ spinner: true })
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
      this.setState({ spinner: false })
      console.log(res.data.data.link);
      let photo = res.data.data.link;
      this.setState({ images: photo })
      this.setState({ images: photo, successfulUpload: true })
    })
  }

  handleFormSubmit = (e) => {
    // e.preventDefault();

    console.log("submitted!")
    const formData = {
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      cost: this.state.cost,
      category: this.state.category,
      UserId: this.props.userid,
      images: this.state.images,
      slug: this.state.itemName
    }
    console.log(formData);
    console.log(formData.UserId)

    axios.post("api/items", formData)
      .then(function (response) {
        console.log(response)
      }).catch(function (err) {
        console.log(err)
        fetch('http://localhost:3001/api/items')
          .then(response => response.json())
          .then(posts => (this.setState({ posts }))
          )
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

        <h2>Your Posted Items</h2>
        <table className="table table-dark table-striped table-bordered table-hover p-2">

          <h1 className="posted-item">Your Posted Items</h1>
          <table className="table table-dark table-striped table-bordered table-hover" >

            <thead>
              <tr>
                {/* <th>Id</th> */}
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
                  {/* <td>{post.id}</td> */}
                  <td>{post.itemName}</td>
                  <td ><img src={post.images} id="table-image" alt="music equipment"></img></td>
                  <td>{post.cost}</td>
                  <td>{post.itemDescription}</td>
                  <td>{post.category}</td>
                </tr>
              )}
            </tbody>
            </table>
</table>
          <br></br>

          <div>
            {/* When post button is  closed */}
            <div className="container p-2 text-center" style={hidden}>
              <h4>Got Some music equipments to rent, post it by clicking button below!</h4>
              <h4>Happy renting!</h4>
            </div>

            <div className="text-center">
              <button className="btn btn-dark mb-2 btn-lg" onClick={this.toggle.bind(this)}>Post New Rental</button>
            </div>


            <div className="container p-3 postForm" style={shown}>
              <div className="text-center">
                <h4>Please fill out some information regarding item you are trying to rent</h4>
              </div>
              <form>
                <div className="container form-group-dark">
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
                    <option value="DJ Equipment">DJ Equipment</option>
                    <option value="Stage Lighting">Stage Lighting</option>
                    <option value="Keyboards">Keyboards</option>
                    <option value="Other">Other</option>
                  </select>

                  <label htmlFor="itemDescription">Choose some pictures of item you are trying to rent</label>
                  <div className="custom-file col-md-8">
                    <input type="file" className="custom-file-input" id="imgur" accept="image/*" data-max-size="5000" onChange={(e) => this.handleImgur(e)}></input>
                    <label className="custom-file-label" for="customFile">{this.state.imageUpload ? this.state.imageUpload.name : 'Choose file'}</label>
                    {this.state.spinner &&
                      <div class="spinner-grow text-dark mt-3" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    }

                    <label className="custom-file-label" htmlFor="customFile">{this.state.imageUpload ? this.state.imageUpload.name : 'Choose file'}</label>

                  </div>


                  <br></br>
                  <div>{this.state.successfulUpload && <p>Image Uploaded Successfully</p>}</div>
                  <br></br>



                  <button className="btn btn-success" onClick={(e) => this.handleImgurUpload(e)}>Upload Image</button>

                  <button className="btn btn-success" onClick={this.handleImgurUpload}>Upload Image</button>
                  {/* {this.state.successfulUpload && <p>hey we did it</p>} */}


                  <br></br>
                  <br></br>
                  <div className="text-center">
                    <button onClick={this.handleFormSubmit} type="submit" className="btn btn-lg btn-primary">Submit</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
          </div>
        
        )
      }
    }
    
export default UserDashboard;