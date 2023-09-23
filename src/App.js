import "./components/style.css";
import LineCharts from "./components/LineCharts";
import BarCharts from "./components/BarCharts";
import PieCharts from "./components/PieCharts";
import RadialBarCharts from "./components/RadialBarCharts";

function App() {
  // {
  //   dates: [
  //     "September 20, 2023",
  //     "September 21, 2023",
  //     "September 22, 2023",
  //     "September 23, 2023",
  //     "September 24, 2023",
  //     "September 25, 2023",
  //     "September 26, 2023",
  //     "September 27, 2023",
  //     "September 28, 2023",
  //     "September 29, 2023",
  //     "September 30, 2023",
  //     "October 1, 2023",
  //     "October 2, 2023",
  //     "October 3, 2023",
  //     "October 4, 2023",
  //     "October 5, 2023",
  //     "October 6, 2023",
  //     "October 7, 2023",
  //     "October 8, 2023",
  //     "October 9, 2023",
  //     "October 10, 2023",
  //     "October 11, 2023",
  //     "October 12, 2023",
  //     "October 13, 2023",
  //     "October 14, 2023",
  //     "October 15, 2023",
  //     "October 16, 2023",
  //     "October 17, 2023",
  //     "October 18, 2023",
  //     "October 19, 2023",
  //     "October 20, 2023",
  //     "October 21, 2023",
  //     "October 22, 2023",
  //     "October 23, 2023",
  //     "October 24, 2023",
  //     "October 25, 2023",
  //     "October 26, 2023",
  //     "October 27, 2023",
  //     "October 28, 2023"
  //   ]
  // }

  const lineChartData = [
    { name: "0", date: "20 Sep 2023", trade: "195.000" },
    { name: "29", date: "21 Sep 2023", trade: "217.336" },
    { name: "51", date: "22 Sep 2023", trade: "196.724" },
    { name: "65", date: "23 Sep 2023", trade: "221.533" },
    { name: "87", date: "24 Sep 2023", trade: "193.716" },
    { name: "97", date: "25 Sep 2023", trade: "196.444" },
    { name: "110", date: "26 Sep 2023", trade: "203.723" },
    { name: "232", date: "27 Sep 2023", trade: "200.487" },
    { name: "375", date: "28 Sep 2023", trade: "209.204" },
    { name: "443", date: "29 Sep 2023", trade: "223.989" },
    { name: "575", date: "30 Sep 2023", trade: "210.055" },
    { name: "582", date: "1 Oct 2023", trade: "209.955" },
    { name: "813", date: "2 Oct 2023", trade: "209.105" },
    { name: "835", date: "3 Oct 2023", trade: "210.495" },
    { name: "873", date: "4 Oct 2023", trade: "197.494" },
    { name: "919", date: "5 Oct 2023", trade: "199.551" },
    { name: "920", date: "6 Oct 2023", trade: "211.414" },
    { name: "921", date: "7 Oct 2023", trade: "193.438" },
    { name: "959", date: "8 Oct 2023", trade: "212.408" },
    { name: "965", date: "9 Oct 2023", trade: "221.238" },
    { name: "989", date: "10 Oct 2023", trade: "193.585" },
    { name: "990", date: "11 Oct 2023", trade: "195.057" },
    { name: "991", date: "12 Oct 2023", trade: "223.899" },
    { name: "992", date: "13 Oct 2023", trade: "191.320" },
    { name: "993", date: "14 Oct 2023", trade: "219.202" },
    { name: "994", date: "15 Oct 2023", trade: "222.008" },
    { name: "995", date: "16 Oct 2023", trade: "201.866" },
    { name: "996", date: "17 Oct 2023", trade: "223.095" },
    { name: "997", date: "18 Oct 2023", trade: "193.869" },
    { name: "998", date: "19 Oct 2023", trade: "224.341" },
    { name: "999", date: "20 Oct 2023", trade: "201.075" },
    { name: "1000", date: "21 Oct 2023", trade: "216.257" },
    { name: "1001", date: "22 Oct 2023", trade: "218.021" },
    { name: "1002", date: "23 Oct 2023", trade: "203.680" },
    { name: "1007", date: "24 Oct 2023", trade: "222.427" },
    { name: "1008", date: "25 Oct 2023", trade: "219.456" },
    { name: "1009", date: "26 Oct 2023", trade: "222.528" },
    { name: "1010", date: "27 Oct 2023", trade: "209.012" },
    { name: "1011", date: "28 Oct 2023", trade: "211.507" },
    { name: "1012", date: "29 Oct 2023", trade: "217.470" },
  ];

  const barChartData = [
    {
      name: "Mon",
      return: -1.75,
    },
    {
      name: "Tue",
      return: 2.9,
    },
    {
      name: "Wed",
      return: 3.2,
    },
    {
      name: "Thu",
      return: 0.7,
    },
    {
      name: "Fri",
      return: 4.8,
    },
    {
      name: "Sat",
      return: 0,
    },
    {
      name: "Sun",
      return: -2.1,
    },
  ];

  const pieChartData = [
    { name: "US30.cash", value: 30.3, fill: "gold" },
    { name: "US100.cash", value: 34.6, fill: "blue" },
    { name: "GER30.cash", value: 33.7, fill: "orange" },
    { name: "BTC", value: 1.4, fill: "red" },
  ];

  let radialBarChartData = [
    {
      name: "Sunday",
      wins: 1,
      losses: 13,
      fill: "purple",
    },
    {
      name: "Saturday",
      wins: 0,
      losses: 0,
      fill: "blue",
    },
    {
      name: "Friday",
      wins: 94,
      losses: 76,
      fill: "orange",
    },
    {
      name: "Thursday",
      wins: 118,
      losses: 52,
      fill: "pink",
    },
    {
      name: "Wednesday",
      wins: 131,
      losses: 86,
      fill: "purple",
    },
    {
      name: "Tuesday",
      wins: 166,
      losses: 136,
      fill: "yellow",
    },
    {
      name: "Monday",
      wins: 61,
      losses: 78,
      fill: "green",
    },
  ];

  radialBarChartData = radialBarChartData?.map((value) => ({
    ...value,
    winRate: (value?.wins / (value?.wins + value?.losses)) * 100 || 0,
  }));

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LineCharts data1={lineChartData} data2={[]} />
      <BarCharts data={barChartData} />
      <PieCharts data={pieChartData} />
      <RadialBarCharts data={radialBarChartData} />
    </main>
  );
}

export default App;
