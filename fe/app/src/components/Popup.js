import React from "react";
import { Button} from "react-bootstrap";


const Popup = (props) => {
  return (
    <div className="popup-box ">
      <div className="box ">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
        <Button className="sneak_button" onClick={props.addSneak}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Popup;
