import { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Popup from "../components/Popup";
class ForSale extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      sneaks: [],
      isShowing: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    const getSneaksForSale = async () => {
      let currentUserData = JSON.parse(localStorage.getItem("user"));
      const SNEAKS_URL = "http://localhost:8080/seller";
      await axios
        .post(SNEAKS_URL, currentUserData)
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

  async addSneak(evt) {
    evt.preventDefault();
    let data = {};
    let currentUserData = JSON.parse(localStorage.getItem("user"));
    let form = document.getElementsByTagName("form")[0];
    for (let i = 0; i < form.length; i++) {
      data[form[i].id] = form[i].value;
    }
    data["sold_by"] = currentUserData.id;

    const SNEAKS_URL = "http://localhost:8080/seller/sneak";
    await axios
      .post(SNEAKS_URL, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log("Fetch Error: " + err);
      });
  }

  togglePopup() {
    this.setState({ isShowing: !this.state.isShowing });
  }

  render() {
    return (
      <div className="container">
        <div className="sneak_header">
          <h3 className="p-3"> For Sale </h3>
          <div>
            <Button className="sneak_button" onClick={this.togglePopup}>
              {" "}
              Add Sneaker{" "}
            </Button>
          </div>
          {this.state.isShowing && (
            <Popup
              content={
                <>
                  <Form>
                    <Form.Group className="mb-3" controlId="sneaker_name">
                      <Form.Label>Sneaker Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                      <Form.Label>Sneaker Description</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                      <Form.Label>Sneaker Price</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="quantity">
                      <Form.Label>Sneaker Quantity</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="colorway">
                      <Form.Label>Sneaker Colorway</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="release_date">
                      <Form.Label>Sneaker Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Form>
                </>
              }
              handleClose={this.togglePopup}
              addSneak={this.addSneak}
            />
          )}
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
                  <Link
                    className="btn btn-info"
                    to={{
                      pathname: "/edit",
                      state: sneak, // your data array of objects
                    }}
                    replace
                  >
                    Edit
                  </Link>
                  {/* <Button
                    value={sneak}
                    onClick={() =>
                      this.props.history.push({
                        pathname: "/edit",
                        state: sneak,
                      })
                    }
                  >
                    Edit
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ForSale);
