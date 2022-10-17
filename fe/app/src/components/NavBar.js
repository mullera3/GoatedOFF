import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap";
import cart_image from "../assets/cart_image.png";
import store_icon from "../assets/GOATED_OFF.png"
class Header extends React.Component {

    async handleLogout(evt)
    {
        evt.preventDefault()
        let currentUser = localStorage.getItem("user")
        if (!currentUser)
        {
            window.location.reload();
        }
        else{
            localStorage.clear();
            window.location.reload();
        }
    }
    render() {

        const { currentUser } = this.context;
        if(currentUser!= null && currentUser.length > 0)
        {
            localStorage.setItem("user", JSON.stringify(currentUser));
        }

        let localStorageItem = localStorage.getItem("user");

        if  (!localStorageItem )
        {
            return (
                <Navbar className="justify-content-center">
                    <Nav.Link  href="/register">REGISTER</Nav.Link>
                    <Nav.Link href="/">STORE</Nav.Link>
                    <Navbar.Brand  pullLeft href="/"><Image src={store_icon } alt="Logo"/></Navbar.Brand>
                    <Nav.Link  href="/login"> LOGIN </Nav.Link>
                    <Nav.Link  href="/cart"><Image src={cart_image} alt="Cart"/></Nav.Link>

                </Navbar>
            )
        }
        else {
            return (
                <Navbar className="justify-content-center">
                    <Nav.Link  href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/">Store</Nav.Link>
                    <Navbar.Brand  pullLeft href="/"><Image src={store_icon} alt="Logo"/></Navbar.Brand>
                    <Nav.Link  href="/cart"><Image src={cart_image} alt="Cart"/></Nav.Link>
                    <Nav.Link  onClick={this.handleLogout}>Logout</Nav.Link>
                </Navbar>
            )
        }

    }
}



export default Header;
