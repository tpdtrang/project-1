import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import IndexComponent from '../share/IndexComponent';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://image2.tin247.com/pictures/2018/12/14/hpw1544757320.jpg' },
        { id: '2', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://toidangtin.com/data/images/483369_gioi-tre-instagram-thich-thu-voi-hinh-anh-chiec-xe-buyt-mang-ten-pini-bar-tai-ho-tuyen-lam-da-lat_1.png' },
        { id: '3', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://topthuthuat.com/wp/wp-content/uploads/2018/04/tai-anh-instagram-len-may-tinh-.jpg' },
        { id: '4', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://image2.tin247.com/pictures/2018/12/14/hpw1544757320.jpg' },
        { id: '5', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://i0.wp.com/www.smarthomehcm.com/wp-content/uploads/2017/08/Instax_Square___zing_2.jpg' },
        { id: '6', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://znews-photo.zadn.vn/w860/Uploaded/neg_rtlzofn/2016_07_06/IT6.jpg' },
        { id: '7', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://i0.wp.com/www.smarthomehcm.com/wp-content/uploads/2017/08/Instax_Square___zing_2.jpg' },
        { id: '8', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://znews-photo.zadn.vn/w860/Uploaded/neg_rtlzofn/2016_07_06/IT6.jpg' },
        { id: '9', title: 'title1', description: 'des1', date: 'May 3,2018', image: 'https://topthuthuat.com/wp/wp-content/uploads/2018/04/tai-anh-instagram-len-may-tinh-.jpg' },

      ]
    }
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd(data) {
    let id = Math.random();
    let ItemNew = [...this.state.data, { id: id, image: data.image, title: data.title, description: data.description, date: data.date }]
    this.setState({
      data: ItemNew
    })
  }
  render() {
    return (
      <div>
        <HeaderLayout></HeaderLayout>
        <IndexComponent data={this.state.data} onAdd={this.onAdd}></IndexComponent>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default IndexPage;