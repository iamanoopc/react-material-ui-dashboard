import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import createReactClass from 'create-react-class';
const data = [
      {name: '2015-09-01', pv: 2400, amt: 2400},
      {name: '2015-09-02', pv: 1398, amt: 2210},
      {name: '2015-09-03', pv: 9800, amt: 2290},
      {name: '2015-09-04', pv: 3908, amt: 2000},
      {name: '2015-09-05', pv: 4800, amt: 2181},
      {name: '2015-09-06', pv: 3800, amt: 2500},
      {name: '2015-09-07', pv: 4300, amt: 2100},
];
const SimpleLineChart = createReactClass({
	render () {
  	return (
    	<LineChart width={800} height={200} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>

       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>

      </LineChart>
    );
  }
})


export default SimpleLineChart;
