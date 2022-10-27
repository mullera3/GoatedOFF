import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ForSale extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      sneaks: []
    };
  }

  componentDidMount() {
    const getSneaksForSale = async () => {
        let currentUserData = JSON.parse(localStorage.getItem("user"));
      const SNEAKS_URL = "http://localhost:8080/seller";
      await axios
        .post(SNEAKS_URL,currentUserData)
        .then((response) => {
          this.setState({
            sneaks: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getSneaksForSale();
  }

  render() {
    return (
      <div className="container">
        <h3 className="p-3 text-center"> For Sale </h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
                <th>Sneaker Name </th>
              <th> Description </th>
               <th> Price </th>
              <th> Quantity </th> 
              <th> Colorway </th> 
              <th> Release Date </th>
            </tr>
          </thead>
          <tbody>
            {this.state.sneaks.map((sneak) => (
              <tr >
              <td>{sneak.sneaker_name}</td>
                <td>{sneak.description} </td>
                <td> {sneak.price} </td> <td> {sneak.quantity} </td>
                <td> {sneak.colorway} </td> <td> {sneak.release_date} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ForSale);
