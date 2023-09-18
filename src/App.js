import "./components/style.css";
import LineCharts from "./components/LineCharts";
import BarCharts from "./components/BarCharts";

function App() {
  const lineChartData = [
    { name: "0", trade: "195.000" },
    { name: "29", trade: "217.336" },

    { name: "51", trade: "196.724" },

    { name: "65", trade: "221.533" },
    { name: "87", trade: "193.716" },

    { name: "97", trade: "196.444" },

    { name: "110", trade: "203.723" },

    { name: "232", trade: "200.487" },

    { name: "375", trade: "209.204" },
    { name: "443", trade: "223.989" },
    { name: "575", trade: "210.055" },
    { name: "582", trade: "209.955" },
    { name: "813", trade: "209.105" },

    { name: "835", trade: "210.495" },

    { name: "873", trade: "197.494" },

    { name: "919", trade: "199.551" },
    { name: "920", trade: "211.414" },
    { name: "921", trade: "193.438" },

    { name: "959", trade: "212.408" },

    { name: "965", trade: "221.238" },
    { name: "989", trade: "193.585" },
    { name: "990", trade: "195.057" },
    { name: "991", trade: "223.899" },
    { name: "992", trade: "191.320" },
    { name: "993", trade: "219.202" },
    { name: "994", trade: "222.008" },
    { name: "995", trade: "201.866" },
    { name: "996", trade: "223.095" },
    { name: "997", trade: "193.869" },
    { name: "998", trade: "224.341" },
    { name: "999", trade: "201.075" },
    { name: "1000", trade: "216.257" },
    { name: "1001", trade: "218.021" },
    { name: "1002", trade: "203.680" },

    { name: "1007", trade: "222.427" },
    { name: "1008", trade: "219.456" },
    { name: "1009", trade: "222.528" },
    { name: "1010", trade: "209.012" },
    { name: "1011", trade: "211.507" },
    { name: "1012", trade: "217.470" },
  ];

  const barChartData = [
    {
      day: "05-01",
      temperature: [-1, 10],
    },
    {
      day: "05-02",
      temperature: [2, 15],
    },
    {
      day: "05-03",
      temperature: [3, 12],
    },
    {
      day: "05-04",
      temperature: [4, 12],
    },
    {
      day: "05-05",
      temperature: [12, 16],
    },
    {
      day: "05-06",
      temperature: [5, 16],
    },
    {
      day: "05-07",
      temperature: [3, 12],
    },
    {
      day: "05-08",
      temperature: [0, 8],
    },
    {
      day: "05-09",
      temperature: [-3, 5],
    },
  ];

  return (
    <main style={{ width: "100%", minHeight: "100vh" }}>
      <LineCharts data={lineChartData} />
    </main>
  );
}

export default App;
