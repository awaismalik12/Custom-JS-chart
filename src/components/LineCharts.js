import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineCharts({ data }) {
  const [dataState, setDataState] = useState("Per Trade");            //Change data visual

  return (
    <div className={"lineChart"}>
      <h3>Balance Chart</h3>
      <div className={"container"}>
        <div className={"buttons"}>
          <div>
            <h3
              style={{
                textDecoration: dataState === "Per Trade" ? "underline" : "",
              }}
              onClick={() => setDataState("Per Trade")}
            >
              Per Trade
            </h3>
            <h3
              style={{
                textDecoration: dataState === "Daily" ? "underline" : "",
              }}
              onClick={() => setDataState("Daily")}
            >
              Daily
            </h3>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorTrade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#151b68" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#151b68" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis axisLine={false} tickLine={false} dataKey="name" />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[190.0, 225.0]}
              type="number"
            />
            <Tooltip />
            <Area
              type="linear"
              dataKey="trade"
              stroke="#0014ff"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTrade)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineCharts;
