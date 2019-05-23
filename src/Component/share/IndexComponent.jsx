import React, { Component } from 'react';

class IndexComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      description: '',
      date: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onHandleChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.resetForm();
  }
  resetForm() {
    this.setState({
      image: '',
      title: '',
      description: '',
      date: ''
    })
  }
  render() {
    return (
      <div>
        <section className="content-container">
          <div className="container">
            <div className="p-content-title">
              <div className="row">
                <div className="col-lg-6">
                  <div className="p-title">
                    <h2 className="heading-2 text-left">Recent Blog Posts</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-add">
                    <button className="btn-add waves-effect"><a className="link" href="/form"><i className="fas fa-plus" /> add</a></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-content-post">
              <div className="row">
                {this.props.data.map(data => (
                  <div className="col-lg-4" key={data.id}>
                    <div className="item-content">
                      <img className="img" src={data.image} alt="true" width="100%" />
                      <div className="p-content text-left">
                        <div className="p-title">
                          <h3 className="heading-3">{data.title}</h3>
                        </div>
                        <div className="p-description text-left">
                          <p className="text">{data.description}</p>
                        </div>
                        <div className="p-date">
                          <p className="date">{data.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
        <section className="form-container">
          <div className="container">
            <form className="p-content text-left" onSubmit={this.onSubmit}>
              <label>Images: </label>
              <input type="text" name="image" onChange={this.onHandleChange} value={this.state.image} />
              <label>Title: </label>
              <input type="text" name="title" onChange={this.onHandleChange} value={this.state.title} />
              <label>Description: </label>
              <input type="text" name="description" onChange={this.onHandleChange} value={this.state.description} />
              <label>Date: </label>
              <input type="text" name="date" onChange={this.onHandleChange} value={this.state.date} />
              <button type="submit" className="btn btn-success">Save</button>
            </form>
          </div>
        </section>
      </div>

    );
  }
}

export default IndexComponent;