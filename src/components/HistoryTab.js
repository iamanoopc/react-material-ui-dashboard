import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SimpleLineChart from '../components/SimpleLineChart';
import DoubleLineChart from '../components/DoubleLineChart';


export default class HistoryTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}
            tabItemContainerStyle={{backgroundColor:"none", marginLeft:"auto",width:"50%", flexDirection:"row", justifyContent:"flex-end"}}
            inkBarStyle={{display:"flex",marginLeft:"100%",flexDirection:"row", justifyContent:"flex-end", }} >
        <Tab label="Simple Line Chart" value="a" style={{ color:"black"}}>
          <div style={{padding:"1em"}}>
          <SimpleLineChart />



          </div>
        </Tab>
        <Tab label="With Legend" value="b" style={{ color:"black"}}>
          <div style={{padding:"1em"}}>
            <DoubleLineChart />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
