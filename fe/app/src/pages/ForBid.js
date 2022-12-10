import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Card} from "react-bootstrap";
class ForBid extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      sneaks: [],
    };

  }

  componentDidMount() {
    const getSneaksForSale = async () => {
      const SNEAKS_URL = "http://localhost:8080/seller/allSneaks";
      await axios
        .get(SNEAKS_URL)
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


      getBid(evt){
        let bids = document.getElementsByClassName("bid");
        for(let i =0; i < bids.length; i++)
        {
          if(bids[i].value !== ''){
            evt.bid = bids[i].value;
          }
        }
        evt.id = JSON.parse(localStorage.getItem("user")).id;
        evt["status"] = "PENDING";

     const SNEAKS_URL = "http://localhost:8080/users/bid";
     axios
       .post(SNEAKS_URL, evt)
       .then((response) => {
        console.log(response.status);
        if(response.status === 200)
        {
            window.location.replace("/bids");
        }
       })
       .catch((err) => {
         console.log("Fetch Error: " + err);
       });

    }

 

  
  render() {
    return (
      <div className="container">
        <div className="sneak_header">
          <h3 className="p-3"> For Bid </h3>
          </div>
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
              <tr>
                <td>{sneak.sneaker_name}</td>
                <td>{sneak.description} </td>
                <td> {sneak.price} </td> <td> {sneak.quantity} </td>
                <td> {sneak.colorway} </td> <td> {sneak.release_date} </td>
                <td>
                 <div>
              <Card.Text>
                <label for="bid">Bid Price:</label>
                <input   type="number" className="bid"></input>
                <Button
                  style={{
                    display:"inline-block",
                    width: "225px",
                    height: "40px",
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "black",
                    float: "right",
                  }}
                  onClick={this.getBid.bind(this,sneak)}
                >
                  Bid
                </Button>
              </Card.Text>
            </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ForBid);
