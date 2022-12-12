import React from "react";
import axios from "axios";

export default class RoleList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://asut.az/tax1/readrole.php`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
     <>
        {this.state.persons.map(person => <option key={person.id} value={person.id}>{person.role}</option>)}
      </>
    );
  }
}