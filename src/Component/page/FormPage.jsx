import React, { Component } from 'react';
import {HeaderLayout,FooterLayout} from '../layout';
import FormComponent from '../share/FormComponent';
import {Redirect} from 'react-router-dom';
class FormPage extends Component {
    constructor(props){
        super(props);
        this.state={
           status:false
        }
        this.onAdd=this.onAdd.bind(this);
    }
    onAdd(data){
        let id=Math.random();
        let ItemNew = [...this.state.data,{id:id, image:data.image, title:data.title, desciption:data.desciption, date:data.date}]
        this.setState({
            data:ItemNew,
            status:true
        })
    }
    render() {
        if(this.state.data){
            return(
                <Redirect to="/"></Redirect>
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