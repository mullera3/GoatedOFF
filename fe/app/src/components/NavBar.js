import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap";
import cart_image from "../assets/cart_image.png";
import store_icon from "../assets/GOATED_OFF.png"
class Header extends React.Component {

    async handleLogout(evt)
    {
        evt.preventDefault()
        let currentUser = localStorage.getItem("user");
        if (!currentUser)
        {
            window.location.replace("/");
        }
        else{
            localStorage.clear();
            window.location.replace("/");
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
                    <Navbar.Brand  pullLeft href="/"><Image src={store_icon } alt="Logo"/></Navbar.Brand>
                    <Nav.Link  href="/login"> LOGIN </Nav.Link>
                    <Nav.Link  href="/cart"><Image src={cart_image} alt="Cart"/></Nav.Link>
                </Navbar>
            )
        }
        else if (JSON.parse(localStorageItem).Account_Access === "ADMIN") {
            return (
                <Navbar className="justify-content-center">
                    <Nav.Link href="/messages">Messages</Nav.Link>
                    <Nav.Link  href="/orders">Orders</Nav.Link>
                    <Nav.Link  href="/admin">Users</Nav.Link>
                    <Navbar.Brand  pullLeft href="/"><Image src={store_icon} alt="Logo"/></Navbar.Brand>
                    <Nav.Link  href="/cart"><Image src={cart_image} alt="Cart"/></Nav.Link>
                    <Nav.Link  onClick={this.handleLogout}>Logout</Nav.Link>
                </Navbar>
            )
        }
        else if (JSON.parse(localStorageItem).Account_Access === "SELLER")
        {
            return (
              <Navbar className="justify-content-center">
                <Nav.Link href="/messages">Messages</Nav.Link>
                <Nav.Link href="/orders">Orders</Nav.Link>
                <Nav.Link href="/seller"> Sneaks </Nav.Link>
                <Navbar.Brand pullLeft href="/">
                  <Image src={store_icon} alt="Logo" />
                </Navbar.Brand>
                <Nav.Link href="/cart">
                  <Image src={cart_image} alt="Cart" />
                </Nav.Link>
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              </Navbar>
            );
        }
        else{
            return (
              <Navbar className="justify-content-center">
                <Nav.Link href="/messages">Messages</Nav.Link>
                <Nav.Link href="/orders"> Orders </Nav.Link>
                <Navbar.Brand pullLeft href="/">
                  <Image src={store_icon} alt="Logo" />
                </Navbar.Brand>
                <Nav.Link href="/cart">
                  <Image src={cart_image} alt="Cart" />
                </Nav.Link>
                <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
              </Navbar>
            );
        }

    }
}



export default Header;
