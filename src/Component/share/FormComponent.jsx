import React, { Component } from 'react';

class FormComponent extends Component {
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

  }
  render() {
    return (
      <section className="form-container">
        <div className="container">
          <form className="p-content text-left" onSubmit={this.onSubmit} >
            <label>Images: </label>
            <input type="text" name="image" onChange={this.onHandleChange} value={this.state.image} />
            <label>Title: </label>
            <input type="text" name="title" onChange={this.onHandleChange} value={this.state.title} />
            <label>Description: </label>
            <input type="text" name="description" onChange={this.onHandleChange} value={this.state.description} />
            <label>Date: </label>
            <input type="date" name="date" onChange={this.onHandleChange} value={this.state.date} />
            <button type="submit" className="btn btn-success">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

export default FormComponent;