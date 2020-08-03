import React, { PureComponent } from 'react';
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const data = [
  { name: 'January', uv: 3000, pv: 1398, amt: 22100 },
  { name: 'Febuary', uv: 2000, pv: 9800, amt: 10090 },
  { name: 'March', uv: 2780, pv: 3908, amt: 40000 },
  { name: 'April', uv: 1890, pv: 4800, amt: 9181 },
  { name: 'May', uv: 2390, pv: 3800, amt: 25000 },
  { name: 'June', uv: 3490, pv: 4300, amt: 52100 },
  { name: 'July', uv: 3490, pv: 4300, amt: 62100 },
  { name: 'August', uv: 3490, pv: 4300, amt: 32100 },
  { name: 'September', uv: 3490, pv: 4300, amt: 42100 },
  { name: 'October', uv: 3490, pv: 4300, amt: 82100 },
  { name: 'November', uv: 3490, pv: 4300, amt: 22100 },
  { name: 'December', uv: 3490, pv: 4300, amt: 72100 },
];

class RevenueChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer height={200} width="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#00567A" fill="#99CFE5" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default RevenueChart;