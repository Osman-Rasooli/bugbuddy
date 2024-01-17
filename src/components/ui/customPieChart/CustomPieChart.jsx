import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { colors } from "../../../data/data";

const CustomPieChart = ({ data, title }) => {
  return (
    <div className="w-full h-[400px] py-10 mt-5 md:pr-10">
      <h3 className="text-tertiary mb-5 font-bold pl-4 uppercase">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[entry.name]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-secondaryLight text-white p-4 rounded shadow">
        <p className="label text-md mb-2 capitalize">Bugs:</p>
        <div className="capitalize" style={{ color: payload[0].payload.fill }}>
          {payload[0].payload.name}: {payload[0].value}
        </div>
      </div>
    );
  }
  return null;
};

export default CustomPieChart;
