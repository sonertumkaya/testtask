import React from "react";
import axios from "axios";

export default class MList extends React.Component {
  state = {
    personsa: []
  };

  componentDidMount() {
    axios.get(`https://asut.az/tax1/readmodul.php`).then(res => {
    //  const personsa = res.data;
      this.setState({ personsa });
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