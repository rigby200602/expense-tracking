import Card from "../components/Card";
import { data, overviewData, spendingCategory } from "../assets/testData";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.defaults.color = "#fff";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card
            key={item.label}
            label={item.label}
            num={item.num}
            Icon={item.Icon}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-white ">
        <div className="w-full md:col-span-2 bg-gray-800 rounded-3xl p-4">
          <Line
            data={{
              labels: overviewData.map((item) => item.month),
              datasets: [
                {
                  label: "Income",
                  data: overviewData.map((item) => item.income),
                  borderColor: "rgba(75, 192, 192, 1)",
                  backgroundColor: "rgba(75, 192, 192, 0.2)",
                  fill: true,
                },
                {
                  label: "Expenses",
                  data: overviewData.map((item) => item.expenses),
                  borderColor: "rgba(255, 99, 132, 1)",
                  fill: true,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                },
              ],
            }}
          />
        </div>
        <div className="w-full h-full bg-gray-800 rounded-3xl  p-4">
          <Doughnut
            data={{
              labels: spendingCategory.map((item) => item.name),
              datasets: [
                {
                  label: "Spending Category",
                  data: spendingCategory.map((item) => item.amount),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
