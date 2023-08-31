import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FFBB28", "#FF8042"];

const PageContainer = () => {
  return (
    <div className="bg-red-100 inline-block">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          className="rounded-3xl bg-red-500"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) =>
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              style={{ borderRadius: "50%" }}
            />
          )}
        </Pie>
      </PieChart>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          className="rounded-3xl bg-red-500"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) =>
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              style={{ borderRadius: "50%" }}
            />
          )}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PageContainer;
