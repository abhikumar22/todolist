import React from 'react';
import Person from './Person';


export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div class="container-fluid row">
        <div class="col-sm-4 col-lg-4 col-md-2 col-xl-2 col-8 bg-success">.col</div>
        <div class="col-sm-4 col-lg-4 col-md-2 col-xl-2 col-1 bg-warning">.col</div>
        <div class="col-sm-4 col-lg-4 col-md-8 col-xl-8 col-3 bg-success">.col</div>
      </div>
    );
  }
}