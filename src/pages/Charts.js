import React, { Component } from 'react';
import {Card,  CardHeader, CardText} from 'material-ui/Card';

import HistoryTab from '../components/HistoryTab';
import SimplePieChart from '../components/SimplePieChart';

import CountryMap from '../components/CountryMap';




export default class Charts extends Component {
  render() {
    return (
      <article className="dashboard-page">
        <section className="section">
            <div className="row h420">
                <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-5 stats-col">
                  <Card style={{height:"400px"}}>
                    <CardHeader title="Pie Chart" subtitle="Website Metrics for your awesome project" />
                    <CardText>
                        <SimplePieChart />
                    </CardText>
                  </Card>
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-7 history-col">
                  <Card style={{height:"400px"}}>
                    <CardHeader title="SimpleLineChart & DoubleLineChart" subtitle="Number of unique visits last 30 days" style={{position:"absolute"}}/>
                    <CardText>
                      <HistoryTab />
                    </CardText>

                  </Card>
                </div>
            </div>
        </section>



        <section className="section map-tasks">
            <div className="row sameheight-container">
                <div className="col-md-8">
                  <Card style={{height:"600px"}}>
                    <CardHeader title="Sales By Countries" />
                    <CardText>
                      <CountryMap/>
                    </CardText>

                  </Card>
                </div>


            </div>
        </section>
      </article>
    );
  }
}
