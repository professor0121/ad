'use client';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', value1: 400, value2: 240 },
  { name: 'Feb', value1: 300, value2: 221 },
  { name: 'Mar', value1: 500, value2: 229 },
  { name: 'Apr', value1: 200, value2: 200 },
  { name: 'May', value1: 278, value2: 218 },
  { name: 'Jun', value1: 189, value2: 250 },
];

export default function MyLineChart(props) {
  return (
    <div style={{ width: props.width, height:props.width }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value1" stroke="#1976d2" strokeWidth={2.5} />
          <Line type="monotone" dataKey="value2" stroke="#1976d2" strokeOpacity={0.4} strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
