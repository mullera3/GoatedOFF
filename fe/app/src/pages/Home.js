import {
    Component
} from "react";
import axios from "axios";
import {
    Row
} from "react-bootstrap";
import {
    withRouter
} from "react-router-dom";
import Sneaks from "../components/Sneaks";

class Home extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      sneaks: [],
      cart: [],
    };
  }

  componentDidMount() {
    const getSneaks = async () => {
      const SNEAKS_URL = "http://localhost:8080/home";
      await axios
        .get(SNEAKS_URL)
        .then((response) => {
          this.setState({
            sneaks: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getSneaks();
  }

  addToFavorites(evt){
    alert("Added To Favorites");
    let sneaker = evt;
    sneaker.user = JSON.parse(localStorage.getItem("user"));

    const SNEAKS_URL = "http://localhost:8080/users/favorites";
    axios
        .post(SNEAKS_URL,sneaker)
        .then((response) => {
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };
    


  onClick(evt){
    function isItemFound(item, cart) {
      let value = false;
      let index = -1;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productName === item.productName) {
          value = true;
          index = i;
        }
      }

      return [value, index];
    }
    let sneaker = evt;
    let sneakerPrice = sneaker.lowestResellPrice;
    let lowestPrice = Object.values(sneakerPrice).sort()[0];
    let sneak_thumbnail = sneaker.thumbnail;
    let shoeName = sneaker.shoeName;
    let quantity = 1;
    let item = {};
    item.productName = shoeName;
    item.sneak_thumbnail = sneak_thumbnail;
    item.quantity = quantity;
    item.price = lowestPrice;

    if (sessionStorage.length !== 0) {
      this.state.cart = JSON.parse(sessionStorage.getItem("items"));
    }

    let currentlyFound = isItemFound(item, this.state.cart)[0];

    if (currentlyFound) {
      let itemIndex = isItemFound(item, this.state.cart)[1];
      this.state.cart[itemIndex].quantity += 1;
    } else this.state.cart.push(item);

    sessionStorage.setItem("items", JSON.stringify(this.state.cart));
    alert("Sneaker added!");
  }

  render() {
    return (
      <Row>
        {" "}
        {this.state.sneaks.map((sneak, i) => (
          <Sneaks
            sneak={sneak}
            onClick={[this.onClick.bind(this, sneak),this.addToFavorites.bind(this,sneak)]}
            isSelected={false}
            key={i}
          />
        ))}
      </Row>
    );
  }
}
export default withRouter(Home);