import {
    Component
} from "react";
import axios from "axios";
import {
    withRouter
} from "react-router-dom";


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.isSelected = props.isSelected;
        this.state = {
            users: [],
        }
    }


    componentDidMount() {

        const getUsers = async () => {

            const Users_URL = "http://localhost:8080/users/admin";
            await axios.get(Users_URL)
                .then(response => {
                    this.setState({
                       users: response.data
                    });

                }).catch((err) => {
                    console.log("Fetch Error: " + err)
                });

        }


        getUsers();

    }

      render() {
        return (
            <div className="container">
            <h3 className="p-3 text-center">Account Overview List </h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th> State</th>
                        <th>Zipcode</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map(user =>
                        <tr key={user.id}>
                            <td>{user.First_Name} {user.Last_Name}</td>
                            <td>{user.Address}</td>
                            <td>{user.City}</td>
                            <td>{user.State}</td>
                            <td>{user.Postal_Code}</td>
                            <td>{user.Email}</td>
                            <td>{user.Account_Access}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        );
      }
    }

    export default withRouter(UsersList);