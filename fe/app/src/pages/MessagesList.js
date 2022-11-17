import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import Button from "react-bootstrap/Button";


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      users: [],
    };

  }

  passAlongUser(user,evt)
  {
    evt.preventDefault();
    this.props.history.push({
      pathname: "/page",
      user: user,
    });


  }

  componentDidMount() {
    const getUsers = async () => {
      const Users_URL = "http://localhost:8080/users/admin";
      await axios
        .get(Users_URL)
        .then((response) => {
          this.setState({
            users: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getUsers();

  }


  render() {
    return (
      <div className="container">
        <h3 id="messages-header" className="p-3 text-center">
          {" "}
          Messages
        </h3>
        <table
          id="messages-table"
          className="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Message User</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.First_Name} {user.Last_Name}
                </td>
                <td>{user.Account_Access}</td>
                <td>
                  {" "}
                  <Button
                  value={user}
                    variant="danger"
                    onClick={this.passAlongUser.bind(this,user)}
                  >
                    {" "}
                    Message{" "}
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(MessageList);
