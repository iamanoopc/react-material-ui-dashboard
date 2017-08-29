import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import {Card,  CardHeader, CardText} from 'material-ui/Card';

import Navigation from 'material-ui/svg-icons/navigation/expand-more';
import Search from 'material-ui/svg-icons/action/search';
import Face from 'material-ui/svg-icons/action/face';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Settings from 'material-ui/svg-icons/action/settings';
import Help from 'material-ui/svg-icons/action/help';
import StarRate from 'material-ui/svg-icons/toggle/star';
import Download from 'material-ui/svg-icons/file/cloud-download';
import Notifications from 'material-ui/svg-icons/social/notifications';

export default class UIElements extends Component {
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
      <article className="dashboard-page">
        <section className="section">
            <div className="row h320">

                <div className="col-xl-4">
                  <h4>I am a Card</h4>
                  <Card style={{height:"200px"}}>
                    <CardHeader
                      title="I am Card Title"
                      subtitle="I am Card SubTitle"

                    />


                    <CardText>
                    <p>I am Card Text</p>
                    </CardText>

                  </Card>
                </div>

                <div className="col-xl-8">
                  <h4>I am another Card</h4>
                  <Card style={{height:"200px"}}>
                    <CardHeader
                      title="I am another Card Title"
                      subtitle="I am another Card SubTitle"

                    />


                    <CardText>
                    <p>I am another Card Text</p>
                    </CardText>

                  </Card>
                </div>
            </div>
        </section>
        <section className="section">
          <div className="row h320">

              <div className="col-xl-3">

                <Card style={{height:"200px"}}>
                  <CardHeader
                    title="Material UI Icons"

                  />
                <CardText style={{textAlign:"center"}}>

                  <Navigation />
                  <Search />
                  <Face />
                  <Logout />
                  <Settings />
                  <Help />
                  <StarRate />
                  <Download />
                  <Notifications />

                  </CardText>

                </Card>
              </div>

              <div className="col-xl-3">

                <Card style={{height:"200px"}}>
                  <CardHeader
                    title="Material UI Icon Buttons"

                  />
                <CardText style={{textAlign:"center"}}>

                  <IconButton><Navigation /></IconButton>
                  <IconButton><Search /></IconButton>
                  <IconButton><Face /></IconButton>
                  <IconButton><Logout /></IconButton>
                  <IconButton><Settings /></IconButton>
                  <IconButton><Help /></IconButton>
                  <IconButton><StarRate /></IconButton>
                  <IconButton><Download /></IconButton>
                  <IconButton><Notifications /></IconButton>

                  </CardText>

                </Card>
              </div>

              <div className="col-xl-3">

                <Card style={{height:"200px"}}>
                  <CardHeader
                    title="AutoComplete"
                  />


                  <CardText>
                    <IconButton><Search /></IconButton>
                    <AutoComplete
                      hintText="Search"
                      dataSource={this.state.dataSource}
                      onUpdateInput={this.handleUpdateInput}
                    />
                  </CardText>

                </Card>
              </div>
          </div>
          <div id="myDataTable">UI Elements - Development in Progress</div>


        </section>
      </article>
    );
  }
}
