import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {withRouter} from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props);
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(evt){
        evt.preventDefault();

        const data  = {
            firstName : this.firstNameRef.current.value,
            lastName : this.lastNameRef.current.value,
            email : this.emailRef.current.value,
            password : this.passwordRef.current.value
        }

        await axios.post("http://localhost:8080/user", data).then((res) => {
            alert("Success")
        }).catch(err => console.log(err));
        this.props.history.push("/login");
    }


    render() {
        return (
            <Container >
                <Form >
                    <h3 >Sign Up</h3>

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
                    <Form.Group id="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required ref={this.passwordRef} />
                    </Form.Group>
                    <div className="p-2">
                        <Form.Group>
                            <Button onClick={this.handleSubmit} type="submit" className="btn btn-primary btn-block w-100 ">Submit</Button>
                        </Form.Group>
                    </div>


                </Form>
            </Container>
        );
    }
}

export default withRouter(Register);