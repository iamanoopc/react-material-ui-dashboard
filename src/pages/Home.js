import React, { Component } from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';
import Stats from '../components/Stats';
import HistoryTab from '../components/HistoryTab';
import SimplePieChart from '../components/SimplePieChart';
import DataGrid from '../components/DataGrid';
import CountryMap from '../components/CountryMap';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      firstStyle:{},
      secondStyle:{},
      thirdStyle:{}
    }
  }

  setSmall = () => {
      this.setState({
        firstStyle: {minHeight:"640px"},
        secondStyle: {minHeight:"840px"},
        thirdStyle: {minHeight:"1040px"}
      })
  }

  setLarge = () => {
      this.setState({
        firstStyle: {minHeight:"320px"},
        secondStyle: {minHeight:"320px"},
        thirdStyle: {minHeight:"320px"}
      })
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
      <article className="dashboard-page">
        <section className="section">
            <div className="row sameheight-container" style={this.state.firstStyle}>
                <div className="col col-xs-12 col-sm-12 col-md-12 col-xl-5 stats-col">
                  <Card style={{height:"300px"}}>
                    <CardHeader title="Stats" subtitle="Website Metrics for your awesome project" />
                    <CardText>
                        <Stats />
                    </CardText>
                  </Card>
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-12 col-xl-7 history-col">
                  <Card style={{height:"300px"}}>
                    <CardHeader title="History" subtitle="Number of unique visits last 30 days" style={{position:"absolute"}}/>
                    <CardText>
                      <HistoryTab />
                    </CardText>

                  </Card>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="row sameheight-container" style={this.state.secondStyle}>

                <div className="col-xl-8">
                  <Card style={{height:"400px"}}>
                    <CardHeader
                      title="Items"
                      subtitle="Data Grid"

                    />


                    <CardText>
                      <DataGrid />
                    </CardText>

                  </Card>
                </div>

                <div className="col-xl-4">
                  <Card style={{height:"400px"}}>
                    <CardHeader
                      title="Sales BreakDown"
                    />
                    <CardText>
                    <SimplePieChart />
                    </CardText>

                  </Card>
                </div>
            </div>
        </section>
        <section className="section map-tasks">
            <div className="row sameheight-container"  style={this.state.thirdStyle}>
                <div className="col-md-12 col-lg-8">
                  <Card style={{height:"500px"}}>
                    <CardHeader title="Sales By Countries" />


                    <CardText>
                      <CountryMap/>
                    </CardText>

                  </Card>
                </div>

                <div className="col-md-12 col-lg-4">
                  <Card style={{height:"500px"}}>
                    <CardHeader
                      title="URL Avatar"
                      subtitle="Subtitle"

                    />


                    <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>

                  </Card>
                </div>
            </div>
        </section>
      </article>
    );
  }
}
