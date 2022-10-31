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
            cart: []
        }
    }


    componentDidMount() {

        const getSneaks = async () => {

            const SNEAKS_URL = "http://localhost:8080/home";
            await axios.get(SNEAKS_URL)
                .then(response => {
                    this.setState({
                        sneaks: response.data
                    });

                }).catch((err) => {
                    console.log("Fetch Error: " + err)
                });

        }


        getSneaks();

    }



    render() {
        return ( <
            Row > {
                this.state.sneaks.map((sneak, i) => < Sneaks sneak= {sneak }  isSelected = {false } key = {i}/> ) } 
                </Row>
            );


        }

    }

    export default withRouter(Home);