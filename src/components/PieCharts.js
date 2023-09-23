import React, { useCallback } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function PieCharts({ data }) {
  return (
    <>
      <div className={"pieChart"}>
        <h3>Balance Chart</h3>
        <div className={"container"}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="top"
                align="center"
              />
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                cornerRadius={10}
                paddingAngle={6}
                dataKey="value"
                label
              >
                {data?.map((entry, index) => (
                  <Cell style={{ outline: "none" }} key={`cell-${index}`} />
                ))}
              </Pie>
              <Tooltip  />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default PieCharts;
