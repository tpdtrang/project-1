import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import IndexComponent from '../share/IndexComponent';
import axios from 'axios';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    var self = this;
    axios({
      method: 'GET',
      url: 'http://localhost:3000/product',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      self.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <IndexComponent data={this.state.data}></IndexComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default IndexPage;