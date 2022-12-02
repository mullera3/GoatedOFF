import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import CartItems from "../components/CartItems";
import axios from "axios";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    this.creditCardNumber = React.createRef();
    this.cvv = React.createRef();
    this.expDate = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cart: JSON.parse(sessionStorage.getItem("items")),
    };
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    const data = {
      firstName: this.firstNameRef.current.value,
      lastName: this.lastNameRef.current.value,
      email: this.emailRef.current.value,
      creditCardNumber: this.creditCardNumber.current.value,
      cvv: this.cvv.current.value,
      expDate: Date.parse(this.expDate.current.value).toString(),
      items: this.state.cart,
    };

    await axios
      .post("http://localhost:8080/api/purchaseOrder", data)
      .then((res) => {
        sessionStorage.clear();
        alert("Success");
      })
      .catch((err) => console.log(err));

    this.props.history.push("/");
  }

  calculateTotal() {
    const taxRate = 0.075;
    let currentCart = this.state.cart;
    let total = 0;
    for (let i = 0; i < currentCart.length; i++) {
      let quantity = currentCart[i].quantity;
      let price = currentCart[i].price;
      total += quantity * price;
    }

    total = total * taxRate + total;

    return total.toFixed(2);
  }

  checkoutForm() {
    return (
      <Col  id="checkout-form">
        <Card className>
          <Form className="h-25">
            <Form.Group id="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" required ref={this.firstNameRef} />
            </Form.Group>
            <Form.Group id="Lastname" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" required ref={this.lastNameRef} />
            </Form.Group>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={this.emailRef} />
            </Form.Group>
            <Form.Group id="creditCardNummber" className="mb-3">
              <Form.Label>CC Number</Form.Label>
              <Form.Control type="text" required ref={this.creditCardNumber} />
            </Form.Group>
            <Form.Group id="cvv" className="mb-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" required ref={this.cvv} />
            </Form.Group>
            <Form.Group id="expDate" className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" required ref={this.expDate} />
            </Form.Group>
            <div>Total: ${this.state.cart ? this.calculateTotal() : 0.0}</div>
            <div className="p-2">
              <Form.Group>
                <Button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn-primary btn-block w-100 "
                >
                  Submit
                </Button>
              </Form.Group>
            </div>
          </Form>
        </Card>
      </Col>
    );
  }
  render() {
    if (this.state.cart == null) {
      return <Row>{this.checkoutForm()}</Row>;
    } else {
      return (
        <Row>
          <Col>
            {this.state.cart.map((item, i) => (
              <CartItems items={item} key={i} />
            ))}
          </Col>

          {this.checkoutForm()}
        </Row>
      );
    }
  }
}

export default Cart;
