import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineCharts({ data1, data2 }) {
  const [dataState, setDataState] = useState("Per Trade"); //Change data visual

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
        <div className="customTooltip">
          <p className="intro">{payload[0]?.payload?.date}</p>
          <p className="intro">{label}</p>
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={"lineChart"}>
      <h3>Balance Chart</h3>
      <div className={"container"}>
        <div className={"buttons"}>
          <div>
            <h3
              className={dataState === "Per Trade" ? "active" : ""}
              onClick={() => setDataState("Per Trade")}
            >
              Per Trade
            </h3>
            <h3
              className={dataState === "Daily" ? "active" : ""}
              onClick={() => setDataState("Daily")}
            >
              Daily
            </h3>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={dataState === "Per Trade" ? data1 : data2}
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
            <Tooltip
              position={{ y: -70 }}
              cursor={{ opacity: "0.5", stroke: "#131397" }}
              content={<CustomTooltip />}
            />
            <Area
              type="monotone"
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
