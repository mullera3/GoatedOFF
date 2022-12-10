import React from "react";
import { Button, Card, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sneaks({ sneak, onClick, isSelected }) {
  let sneak_thumbnail = sneak.thumbnail;
  let shoeName = sneak.shoeName;
  let retailPrice = sneak.retailPrice;
  let sneakResellLinks = sneak.resellLinks;
  let currentPrice = sneak.lowestResellPrice;

  let resellInfo = Object.keys(sneakResellLinks).map(function (key) {
    return (
      <ListGroup.Item>
        {" "}
        {key.toUpperCase()}: <Link>{sneakResellLinks[key]}</Link>{" "}
        {currentPrice[key]}
      </ListGroup.Item>
    );
  });

  // if we havent selected a move render all games
  if (isSelected === false) {
    return (
      <Col md={4} sm={6} className="d-flex align-items-stretch ">
        <Card
          className="m-2"
          style={{ flex: 1, width: "18rem", backgroundColor: "#030303" }}
        >
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "16vw", objectFit: "cover" }}
            src={sneak_thumbnail}
            className="mx-auto"
          />
          <Card.Body>
            <Card.Title>{shoeName}</Card.Title>
            <hr />
            <Card.Subtitle>Resale Links & Prices:</Card.Subtitle>
            <br />
            <ListGroup variant="flush">{resellInfo}</ListGroup>
            <hr />
            <Card.Text>
              <div>
                <Card.Text>
                  Retail Price: {retailPrice}
                  <hr />
                  <Button
                    className="sneak-button"
                    value={JSON.stringify(sneak)}
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderColor: "black",
                      float: "left",
                    }}
                    onClick={onClick[0]}
                  >
                    {" "}
                    Add to Cart
                  </Button>
                  <Button
                    className="sneak-button"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      borderColor: "black",
                      float: "right",
                    }}
                    onClick={onClick[1]}
                  >
                    {" "}
                    Favorite{" "}
                  </Button>
                </Card.Text>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}



export default Sneaks;
