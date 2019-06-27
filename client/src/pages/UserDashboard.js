import React from "react";
import "./UserDashboard.css";
import axios from "axios";

class UserDashboard extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.loadItems()
  }

  loadItems = () => {
    axios.get("api/items").then(res => {
      const items = res.data;
      this.setState({ items})
    })
  }

  render() {
    return (
      <div className="container p-5">
         <ul>
      
      </ul>
        <h1>Your Posted Items</h1>
        <table className="table table-striped">
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
        <button>post new rental</button>
        <br></br>


      </div>

    );
  }
}


export default UserDashboard;