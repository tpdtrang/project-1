import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layout';
import FormComponent from '../share/FormComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }
    onAdd = (data) => {
        var self = this;
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/product',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                'image': data.image,
                'title': data.title,
                'description': data.description,
                'date': data.date
            }
        }).then(function (response) {
            self.setState({
                status: true
            })
        })
    }
    render() {
        if (this.state.status) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div>
                <HeaderLayout></HeaderLayout>
                <FormComponent onAdd={this.onAdd}></FormComponent>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default FormPage;