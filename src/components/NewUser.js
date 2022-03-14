import React from "react";
import "../App.css";

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      years: "",
      message: "",
    };
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  onYearsChange = (event) => {
    const years = event.target.value;
    this.setState({ years });
  };

  onFormSubmit = (event) => {
    const { years, name } = this.state;

    event.preventDefault();
    if (name && years && !isNaN(years)) {
      this.props.createUser(name, years);
      this.setState({ name: "", years: "", message: "" });
    } else {
      this.setState({
        message: "Za predaju podataka ispravno popunite polja.",
      });
    }
  };

  render() {
    const { years, name, message } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="name">
          <strong>Ime i prezime: </strong> <br /> (obavezna vrijednost)
        </label>
        <br />
        <input
          type="text"
          id="name"
          onChange={this.onNameChange}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="years">
          <strong>Godine: </strong> <br /> (obavezna vrijednost numeričkog tipa)
        </label>
        <br />
        <input
          type="text"
          id="years"
          onChange={this.onYearsChange}
          value={years}
        />
        <br />
        <br />
        <input type="submit" value="Spremi" />
        <p>
          <strong>{message}</strong>
        </p>
      </form>
    );
  }
}

export default NewUser;
