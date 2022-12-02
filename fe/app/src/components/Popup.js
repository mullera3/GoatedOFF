import React from "react";
import { Button} from "react-bootstrap";


const Popup = (props) => {
  return (
    <div className="popup-box ">
      <div className="box ">
      <div className="icon-div">
        <span id="close-icon" onClick={props.handleClose}>
          x
        </span>
      </div>
        {props.content}
        <Button className="popUpButton" onClick={props.addSneak}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Popup;
