import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Navigation from 'material-ui/svg-icons/navigation/expand-more';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import Popover from 'material-ui/Popover';
import Search from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import Face from 'material-ui/svg-icons/action/face';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Settings from 'material-ui/svg-icons/action/settings';
import Help from 'material-ui/svg-icons/action/help';
import StarRate from 'material-ui/svg-icons/toggle/star';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Notifications from 'material-ui/svg-icons/social/notifications';
// import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { darkBlack} from 'material-ui/styles/colors';



var divStyle = {
  display: 'flex'
};
export default class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 1,
        dataSource: [],
      };
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };
  render() {
    return (
      <header className={this.props.class} >
      <Toolbar>
        <ToolbarGroup firstChild={true} style={{flexBasis:"25%"}}>
          <div style={divStyle}>
            <IconButton><Search /></IconButton>
            <AutoComplete
              hintText="Search"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
            />
          </div>
        </ToolbarGroup>
        <ToolbarGroup style={{flexBasis:"50%", justifyContent:"center"}}>
          <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="View in GitHub"
            secondary={true}
            icon={<FontIcon className="muidocs-icon-custom-github" />}
          />
          <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Rate this Project"
            secondary={true}
            icon={<StarRate />}
          />
          <FlatButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            label="Download Zip"
            secondary={true}
            icon={<Download />}
          />
        </ToolbarGroup>
        <ToolbarGroup style={{flexBasis:"25%", justifyContent:"flex-end"}}>
        <Badge badgeContent={4} primary={true} style={{padding:"0", marginRight:"1em"}} >
          <IconMenu
            iconButtonElement={<IconButton><Notifications /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}

            animated={true}
          >
          <List>
            <Subheader>Today</Subheader>
            <ListItem
              leftAvatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png" />}
              primaryText="Brendan Lim"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} style={{margin:"0"}} />
            <ListItem
              leftAvatar={<Avatar src="http://findicons.com/files/icons/213/south_park/256/randy_marsh_head_icon_2.png" />}
              primaryText="me, Scott, Jennifer"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Summer BBQ</span><br />
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} style={{margin:"0"}} />
            <Subheader>Yesterday</Subheader>
            <ListItem
              leftAvatar={<Avatar src="https://bitcino.com/uploads/profile/e93ee346e641bd473d1c927f3512862c.png" />}
              primaryText="Brendan Lim"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brunch this weekend?</span><br />
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} style={{margin:"0"}} />
            <ListItem
              leftAvatar={<Avatar src="http://www.gensansale.com/data/avatars/l/12/12914.jpg?1367225801" />}
              primaryText="me, Scott, Jennifer"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Summer BBQ</span><br />
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            </List>
          </IconMenu>
        </Badge>
          <label>John Doe</label>
          <IconMenu
            iconButtonElement={<IconButton><Navigation /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Profile" leftIcon={<Face />} />
            <MenuItem primaryText="Notifications" leftIcon={<Notifications />} />
            <MenuItem primaryText="Settings" leftIcon={<Settings />} />
            <MenuItem primaryText="Help" leftIcon={<Help />} />
            <MenuItem primaryText="Sign out" leftIcon={<Logout />} />
          </IconMenu>

        </ToolbarGroup>
      </Toolbar>


      </header>
    );
  }
}
