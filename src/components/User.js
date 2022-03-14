import React from "react";

import NewUser from "./NewUser";
import ShowUsers from "./ShowUsers";
import "../App.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  addNewUser = (name, years) => {
    this.setState({
      users: [
        ...this.state.users,
        {
          id: new Date().getTime(),
          name: name,
          years: years,
        },
      ],
    });
  };

  deleteUser = (index) => {
    var arr = this.state.users;
    arr = arr.filter((item, _index) => {
      return _index !== index;
    });
    this.setState({ users: arr });
  };

  render() {
    return (
      <div>
        <div className="wrapperKorisnici">
          <div className="wrapperContent">
            <h2>Korisnici</h2>
            <NewUser createUser={this.addNewUser} />
          </div>
        </div>
        <div className="korisniciView">
          <ShowUsers users={this.state.users} onUserDelete={this.deleteUser} />
        </div>
      </div>
    );
  }
}

export default Users;
