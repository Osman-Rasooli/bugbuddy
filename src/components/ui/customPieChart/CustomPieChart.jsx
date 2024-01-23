import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { colors } from "../../../data/data";

import Loader from "../loader/Loader";

const CustomPieChart = ({ data, title, loading, error }) => {
  return (
    <div className="w-full h-[400px] py-10 pl-5 pb-14 mt-8 md:pr-10 border-[0.5px]  rounded-md border-secondaryLight shadow-sm shadow-white">
      <h3 className="text-tertiary mb-5 font-bold pl-4 uppercase">{title}</h3>
      {loading && (
        <div className="h-full -mt-5 flex justify-center items-center">
          <Loader />
        </div>
      )}
      {error && (
        <div className="h-full -mt-5 flex justify-center items-center">
          <h2>No Data Found!</h2>
        </div>
      )}
      {!loading && !error && data && (
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
      )}
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
