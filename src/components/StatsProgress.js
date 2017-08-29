import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class StatsProgress extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 80,
    };
  }

  render() {
    return (

      <div className="col-xs-12 col-sm-6 stat-col">
        <div className="stat-icon">
          <i className={"fa fa-"+this.props.icon}></i>
        </div>
        <div className="stat">
          <div className="value">
          {this.props.value}
          </div>
          <div className="name">
            {this.props.desc}
          </div>
        </div>
        <LinearProgress mode="determinate" value={this.state.completed} className="line-progress"/>
      </div>



    );
  }
}
