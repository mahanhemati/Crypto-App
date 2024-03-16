import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";
function Chart({type , chart}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={400} height={400} data={chart}>
      <Line
        type="monotone"
        dataKey={type}
        stroke="#3874ff"
        strokeWidth="2px"
      />
      <CartesianGrid stroke="#404042" />
      <Tooltip />
      <YAxis dataKey={type} domain={["auto", "auto"]} />
      <YAxis dataKey="date" hide />
      <Legend />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default Chart