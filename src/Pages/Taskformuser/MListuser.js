import React from "react";
import axios from "axios";

export default class MList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://asut.az/tax1/readmodul.php`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
     <>
        {this.state.persons.map(person => <option key={person.id} value={person.id}>{person.modul}</option>)}
      </>
    );
  }
}