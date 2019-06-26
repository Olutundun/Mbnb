import React from "react";
import "./UserDashboard.css";
// import Modal from "./src/components/Modal/index.js";
import axios from 'axios';


class UserDashboard extends React.Component {

  state = {
    image: null
  }
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  }
  fileSelectedHandler = (event) => {
    this.setState({
      image: event.target.files[0]
    })
    
  let reader= new FileReader();
  reader.readAsDataURL(event.target.files[0])
  
  reader.onload = (event) => {
    console.warn("img data" + event.target.result);
  }
  }
render() {
    return(
        
<div className="container p-5">
    <h1>Your Posted Items</h1>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">item #</th>
        <th scope="col">image</th>
        <th scope="col">cost per day</th>
        <th scope="col">description</th>
        <th scope="col">category</th>
        <th scope="col">date posted</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>678</td>
        <td>n/a</td>
        <td>$80</td>
        <td>Vintage Fender Tele</td>
        <td>Guitar</td>
        <td>6/20</td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>267</td>
        <td>n/a</td>
        <td>$120</td>
        <td>PA System</td>
        <td>Stage Equipment</td>
        <td>5/31</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>167</td>
        <td>n/a</td>
        <td>$25</td>
        <td>metal cowbell</td>
        <td>Drums</td>
        <td>6/11</td>
        <td></td>
      </tr>
      <th scope="row">4</th>
      <td></td>
    </tbody>
  </table>
  <br></br>
          <button>post new rental</button>
          <br></br>
        

    <form>
      <div className="form-group">
        <label for="exampleInputName">Item Name</label>
        <input type="name" class="form-control" id="exampleInputItem" aria-describedby="emailHelp" placeholder="Enter Item name"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputDescription">Item description</label>
        <input type="description" class="form-control" id="exampleInputDescription" placeholder="Enter Item Description"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Cost</label>
        <input type="description" class="form-control" id="exampleInputDescription" placeholder="Average Cost"></input>
      </div>
      <div class="form-group">
    <label for="exampleFormControlSelect1">Category select</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Guitar/Base</option>
      <option>Drum sets</option>
      <option>DJ Equipment</option>
      <option>Stage lighting</option>
      <option>Keyboards</option>
    </select>
  </div>
  <p>Choose an image of your gear to upload</p>
      <input type="file" onChange={this.fileSelectedHandler}></input>
      <button onClick={this.fileUploadHandler} className="btn btn-danger">Upload File</button>
      <br></br>
      <br></br>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
            
</div>
       
       
        
    );
  }
}





export default UserDashboard;