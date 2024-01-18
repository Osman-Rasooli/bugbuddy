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

const CustomBarChart = ({ data, title }) => {
  return (
    <div className="w-full h-[400px] py-10 mt-5 ">
      <h3 className="text-tertiary mb-5 font-bold pl-4 uppercase">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="alias" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="tasks" fill="#8884d8" barSize={25} />
          <Bar dataKey="bugs" fill="#ed2647" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
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
        <p className="label text-md mb-2">{payload[0].payload.name}</p>
        <div>{content}</div>
      </div>
    );
  }
  return null;
};

export default CustomBarChart;
