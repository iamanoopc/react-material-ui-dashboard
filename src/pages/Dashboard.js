import React, { Component } from 'react';
import Sidebar  from '../components/Sidebar';
import Header from '../components/Header';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Charts from '../pages/Charts';
import Tables from '../pages/Tables';
import Forms from '../pages/Forms';
import Pages from '../pages/Pages';
import Documents from '../pages/Documents';
import ItemsManager from '../pages/ItemsManager';
import UIElements from '../pages/UIElements';


class Dashboard extends Component {
  constructor(){
    super();
    this.state = {

      open: true,
      style:{}
    }
  }
  

  setSmall = () => {
      this.setState({open: false, style: {marginLeft:"0", flexBasis:"100%"}})
  }

  setLarge = () => {
      this.setState({open: true, style: {marginLeft:"15%", flexBasis:"85%"}})
  }
  componentWillMount() {
    const mediaQuery = window.matchMedia('(min-width: 1100px)');
    if (mediaQuery.matches) {
      this.setLarge()
    } else {
      this.setSmall()
    }
    mediaQuery.addListener((mq) => {
      if (mq.matches) {
        this.setLarge()
      } else {
        this.setSmall()
      }
    });
  }
  render() {
    return (
      <Router>
        <div>
        <div className="wrapper">
          <Sidebar class="sidebar" />
          <div className="container" style={this.state.style}>
            <Header class="header" />
            <Route exact path="/" component={Home}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/charts" component={Charts}/>
            <Route path="/tables" component={Tables}/>
            <Route path="/pages" component={Pages}/>
            <Route path="/ui-elements" component={UIElements}/>
            <Route path="/items-manager" component={ItemsManager}/>
            <Route path="/documents" component={Documents}/>
          </div>
        </div>

        </div>
      </Router>
    );
  }
}




export default Dashboard;
