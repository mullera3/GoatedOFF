import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.user,
    };
  }

  componentDidMount(){
    
  }

  render()
  {
    return(
    <Form>
        <Form.Group id="username" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" required ref={this.usernameRef} />
        </Form.Group>
    </Form>
    )
    
  }
}

export default withRouter(Message);
