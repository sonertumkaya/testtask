import React from "react";
import axios from "axios";


export default class DashboardForm1 extends React.Component {
 
  constructor(props) {
    super(props);
    this.state ={
     
    persons: []
  };
}

  componentDidMount() {
    axios.get(`https://asut.az/tax1/taskdashboard1.php?action=form&`+this.props.no+`&btarih=`+this.props.batarih+`&starih=`+this.props.starih).then(res => {
      const persons = res.data;
      this.setState({ persons });
      console.log(persons);
    });
  }

  render() {
    return (
     <>
        {this.state.persons.map(person => 
        
        <li className="d-flex mb-0 pb-0">
        <div className="avatar flex-shrink-0 me-3">
          <span className="avatar-initial rounded bg-label-info"><i className='bx bx-test-tube' ></i></span>
        </div>
        <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
          <div className="me-2">
            <h6 className="mb-0">{person.status}</h6>
            <small className="text-muted"></small>
          </div>
          <div className="user-progress">
            <small className="fw-semibold">{person.sayi}</small>
          </div>
        </div>
      </li>
        
        )}
      </>
    );
  }
}
