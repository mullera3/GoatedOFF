import { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";


class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.isSelected = props.isSelected;
    this.state = {
      sneaks: [],
    };
  }

  componentDidMount() {
    const getReport = async () => {
      const Report_URL = "http://localhost:8080/users/report";
      await axios
        .get(Report_URL)
        .then((response) => {
           console.log(response.data)
          this.setState({
            sneaks: response.data,
          });
        })
        .catch((err) => {
          console.log("Fetch Error: " + err);
        });
    };

    getReport();
  }

  render() {
    return (
      <div className="container">
        <h3 className="p-3 text-center">Sneakers Sold </h3>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Seller ID</th>
              <th>Number Of Sales</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sneaks.map((s) => (
              <tr key={s.id}>
                <td>
                  {s[0]} 
                </td>
                <td>{s[1]}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(ReportPage);
