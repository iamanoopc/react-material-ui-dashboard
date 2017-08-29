import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ShowChart from 'material-ui/svg-icons/editor/show-chart';
import Tables from 'material-ui/svg-icons/editor/border-all';
import Documents from 'material-ui/svg-icons/content/content-copy';
import Forms from 'material-ui/svg-icons/content/content-paste';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import Pages from 'material-ui/svg-icons/social/pages';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';

import {  Link } from 'react-router-dom';


const mql = window.matchMedia(`(min-width: 800px)`);


export default class Sidebar extends React.Component {
  constructor(){
    super();
    this.state = {
      mobile: false,
      open: true,
      docked: true,
    }
  }
  toggleOpenDrawer = () => {
    if (!this.state.mobile) {
        return;
    }
    this.setState({
        open: !this.state.open
    })
  }

  setSmall = () => {
      this.setState({open: false, docked: false, mobile: true})
  }

  setLarge = () => {
      this.setState({open: true, docked: true, mobile: false})
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
      <aside className={this.props.class}>

        <Drawer open={this.state.open} docked={this.state.docked} containerStyle={{width:"15%"}} className="responsive">
          <div className="sidebar-header">
            <div className="brand">
              <img src="https://d1ow200m9i3wyh.cloudfront.net/img/assets/videoblocks/images/subscription-icon-large.png" alt="Brand Logo" />
              Modular Admin
            </div>
          </div>
          <Link  style={{ textDecoration: 'none' }} to="/"><MenuItem leftIcon={<ActionHome />}>Dashboard</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/items-manager"><MenuItem leftIcon={<ViewModule />}>Items Manager</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/charts"><MenuItem leftIcon={<ShowChart />}>Charts</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/tables"><MenuItem leftIcon={<Tables />}>Tables</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/forms"><MenuItem leftIcon={<Forms />}>Forms</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/ui-elements"><MenuItem leftIcon={<LibraryBooks />}>UI Elements</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/pages"><MenuItem leftIcon={<Pages />}>Pages</MenuItem></Link>
          <Link  style={{ textDecoration: 'none' }} to="/documents"><MenuItem leftIcon={<Documents />}>Documents</MenuItem></Link>
        </Drawer>
      </aside>
    );
  }
}
