import React from "react";
import { Button, Card, Image } from "react-bootstrap";

function CartItems({ items }) {
  return (
    <Card
      style={{
        flex: 1,
        width: "23rem",
        color: "white",
        backgroundColor: "#030303",
        margin: "25px",
      }}
    >
      <Image
        style={{ width: "100%", height: "16vw", objectFit: "cover" }}
        src={items.sneak_thumbnail}
      />
      <Card.Body>
        <Card.Title>{items.productName}</Card.Title>
        <hr />
        <Card.Text>Quantity: {items.quantity}</Card.Text>
        <Card.Text>Price: {items.price}</Card.Text>
        <Button  onClick={removeFromCart.bind(this,items)} className="card-button">
        Remove Sneaker
        </Button>
      </Card.Body>
    </Card>
  );
}

function removeFromCart(evt)
{
    let items = JSON.parse(sessionStorage.getItem('items'))
    console.log(typeof items)

    for(let i = 0; i < items.length; i++ )
    {
         if (JSON.stringify(items[i]) === JSON.stringify(evt)){

            if (items[i].quantity > 1) {
                items[i].quantity -= 1;
            }
            else{
                const index = i;
                if (index > -1) {
                  items.splice(index, 1);
                }
            }
         }
    }
        sessionStorage.setItem("items", JSON.stringify(items));
        window.location.reload(true);
}

export default CartItems;
