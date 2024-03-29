import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Loader from "../loader/Loader";

const CustomBarChart = ({
  data,
  title,
  xAxisKey,
  dataKeys,
  loading,
  error,
}) => {
  const colors = [
    "#2ecc71",
    "#0066cc",
    "#87ceeb",
    "#6DBE45",
    "#3498db",
    "#ffaa00",
    "#ff6347",
  ];

  return (
    <div className="w-full h-[400px] py-10 pb-14 mt-8 border-[0.5px] bg-white dark:bg-secondary transition  rounded-md border-secondaryLight shadow-sm shadow-secondary dark:shadow-white">
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
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {dataKeys.map((dataKey, index) => (
              <Bar
                key={dataKey}
                dataKey={dataKey}
                fill={colors[index]}
                barSize={25}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let content = payload.map((data) => {
      return (
        <p
          key={data.name}
          className={"detail text-sm capitalize font-bold"}
          style={{ color: data.fill }}
        >
          {data.name}: {data.value}
        </p>
      );
    });
    return (
      <div className="custom-tooltip bg-secondaryLight text-white p-4 rounded shadow">
        <p className="label text-md mb-2">
          {payload[0].payload.name || payload[0].payload.project}
        </p>
        <div>{content}</div>
      </div>
    );
  }
  return null;
};

export default CustomBarChart;
