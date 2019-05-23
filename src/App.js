import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {IndexPage,FormPage} from './Component/page';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data:[
        {id:'1',path:'/' ,component:IndexPage, exact:true},
        {id:'2',path:'/form' ,component:FormPage, exact:false}
      ]
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.data.map(data => (
            <Route key={data.id} path={data.path} exact={data.exact} component={data.component}></Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;