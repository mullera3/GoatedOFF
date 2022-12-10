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
import FavSneaks from "../components/FavsSneaks";


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      favorites: [],
    };
  }

  componentDidMount() {
    const getFavorites = async () => {
      const SNEAKS_URL = "http://localhost:8080/users/favs";
      let user = JSON.parse(localStorage.getItem("user"));
      await axios
        .post(SNEAKS_URL,user)
        .then((response) => {
          console.log(response)
          this.setState({
            favorites: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getFavorites();
  }

  onClick(evt){
    let sneaker = evt
    const SNEAKS_URL = "http://localhost:8080/users/removeFav";
      axios
        .post(SNEAKS_URL,sneaker)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });

    window.location.reload();
  }

  render() {
    return (
      <Row>
        {" "}
        {this.state.favorites.map((sneak, i) => (
          <FavSneaks
            sneak={sneak}
            onClick={this.onClick.bind(this,sneak)}
            isSelected={false}
            key={i}
          />
        ))}
      </Row>
    );
  }
}

export default withRouter(Favorites);
