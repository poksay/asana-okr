import React from 'react';
import Axios from 'axios';

class OkrAsana extends React.Component {

  constructor(props) {
  super(props);
  this.state = {};
  }

  componentWillMount() {
    Axios.get('/api/tasks').then((response) => {
      this.setState(response.data);
    });
  }

  render() {
    return(
      <div className='wrapper'>
        <nav>
          <a className='logo'> Asana OKRs </a>
        </nav>
        <div className='container'>
          {this.state.name}
        </div>
      </div>
    )};
}

export default OkrAsana;
