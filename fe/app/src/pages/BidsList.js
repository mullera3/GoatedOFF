import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";

class BidsList extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      bids: [],
    };
  }

  componentDidMount() {
    const getBids = async () => {
      let user_id = JSON.parse(localStorage.getItem("user"));
      const Users_URL = "http://localhost:8080/users/bids";
      await axios
        .post(Users_URL,user_id)
        .then((response) => {
          this.setState({
            bids: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getBids();
  }

  removeBid(evt)
  {
    let bid = evt;

    const Users_URL = "http://localhost:8080/users/remove-bid";
      axios
        .post(Users_URL,bid)
        .then((response) => {
          alert("Bid removed");
          window.location.reload();
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });

  }

  render() {
    let accountType = JSON.parse(localStorage.getItem("user")).Account_Access;
    if(accountType === "SELLER")
    {
        return (
          <div className="container">
            <h3 id="messages-header" className="p-3 text-center">
              {" "}
              Bids
            </h3>
            <table
              id="messages-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>User</th>
                  <th>Bid Amount</th>
                  <th>Shoe Name</th>
                  <th>Description</th>
                  <th>Colorway</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bids.map((b) => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.bid}</td>
                    <td>{b.sneaker_name}</td>
                    <td>{b.description}</td>
                    <td>{b.colorway}</td>
                    <td>
                      {" "}
                      <Button
                        onClick={this.removeBid.bind(this, b)}
                        value={b}
                        variant="danger"
                      >
                        IGNORE
                      </Button>{" "}
                    </td>
                    <td>
                      {" "}
                      <Button value={b} variant="danger">
                        ACCEPT
                      </Button>{" "}
                    </td>
                    <td> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

    }
    else{
        return (
          <div className="container">
            <h3 id="messages-header" className="p-3 text-center">
              {" "}
              Bids
            </h3>
            <table
              id="messages-table"
              className="table table-striped table-bordered"
            >
              <thead>
                <tr>
                  <th>Seller</th>
                  <th>Bid Amount</th>
                  <th>Shoe Name</th>
                  <th>Description</th>
                  <th>Colorway</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bids.map((b) => (
                  <tr key={b.id}>
                    <td>{b.sold_by}</td>
                    <td>{b.bid}</td>
                    <td>{b.sneaker_name}</td>
                    <td>{b.description}</td>
                    <td>{b.colorway}</td>
                    <td>
                      {" "}
                      <Button
                        onClick={this.removeBid.bind(this, b)}
                        value={b}
                        variant="danger"
                      >
                        Remove
                      </Button>{" "}
                    </td>
                    <td> </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
    
  }
}

export default withRouter(BidsList);
