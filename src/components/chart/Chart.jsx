import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, chartData, dataKey, grid }) {

  console.log(dataKey)
  console.log(chartData)
  return (
    <div className='chart'>
      <h2 className="chartTitle">
      {title}

      </h2>
      <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart data = {chartData}>
          <XAxis dataKey="name" stroke ="#5550BD"/>
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
