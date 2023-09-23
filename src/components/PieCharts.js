import React, { useCallback, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;

  return (
    <g>
      <rect
        x={cx - 65}
        y={cy - 35}
        rx="20"
        ry="20"
        width="130"
        height="70"
        style={{ fill: "none", stroke: fill, strokeDasharray: "6" }}
      />
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        <tspan x={cx} dy="-0.2em" fill="white">
          {payload.name}
        </tspan>
        <tspan x={cx} dy="1.4em">
          {"("} {parseFloat(percent * 100).toFixed(2)} {"% )"}
        </tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        cornerRadius={10}
        fill={fill}
      />
    </g>
  );
};

function PieCharts({ data }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const onPieLeave = useCallback(
    (_, index) => {
      setActiveIndex(-1);
    },
    [setActiveIndex]
  );

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
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                innerRadius={80}
                outerRadius={120}
                fill="#8884d8"
                cornerRadius={10}
                paddingAngle={6}
                dataKey="value"
                label
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
              >
                {data?.map((entry, index) => (
                  <Cell
                    style={{
                      outline: "none",
                      opacity: activeIndex < 0 ? "1" : "0.5",
                    }}
                    key={`cell-${index}`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default PieCharts;
