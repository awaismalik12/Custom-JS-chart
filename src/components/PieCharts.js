import React, { useCallback, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Sector
} from "recharts";

const renderActiveShape = (props) => {
  console.log('pie',props);
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name} {'('} {parseFloat(percent * 100).toFixed( 2 )} {'% )'}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

function PieCharts({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
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
              >
                {data?.map((entry, index) => (
                  <Cell style={{ outline: "none" }} key={`cell-${index}`} />
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
