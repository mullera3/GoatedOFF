import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {

    const getOrders = async () => {
    let currentUserData = JSON.parse(localStorage.getItem("user"));
    const ORDERS_URL = "http://localhost:8080/orders";
      await axios.post(ORDERS_URL,currentUserData)
      .then((response) => {
        console.log(response.data)
          this.setState({
            orders: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getOrders();
  }

  render() {
    return ( 
      <div className="container">
        <h3 className="p-3 text-center"> Orders </h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
                <th>Order ID </th>
              <th> Order Price </th>
               <th> Shipping To</th>
              <th> Sneaker ID </th> 
              <th> Sold By</th> 
              <th> Purchase Date </th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) => (
              <tr >
              <td>{order.order_id}</td>
                <td>
                  {order.cost} 
                </td>
                <td> {order.shipping} </td> <td> {order.sneaker_id} </td>
                <td> {order.sold_by} </td> <td> {order.created_At} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Orders);
