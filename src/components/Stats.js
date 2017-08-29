import React from 'react';
import StatsProgress from './StatsProgress'
export default class Stats extends React.Component {


  render() {
    return (
      <div className="row row-sm stats-container">
  			<StatsProgress value="5407" icon="rocket" desc="Active Items"/>
        <StatsProgress value="78464" icon="shopping-cart" desc="Items Sold"/>
        <StatsProgress value="$80.560" icon="line-chart" desc="Monthly Income"/>
        <StatsProgress value="359" icon="users" desc="Total Users"/>
        <StatsProgress value="59" icon="list-alt" desc="Tickets Closed"/>
        <StatsProgress value="$780.064" icon="dollar" desc="Total Income"/>
  		</div>

    );
  }
}
