import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

function EditSneaker() {
  return (
    <div>
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
    </div>
  );
}

export default withRouter(EditSneaker);
