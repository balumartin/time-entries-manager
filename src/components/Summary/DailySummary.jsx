import { format, isSameDay } from "date-fns";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DailySummary({ entries, selectedDate }) {
  const selected = new Date(selectedDate);

  const dailyEntries = entries.filter((entry) =>
    isSameDay(new Date(entry.workDay), selected),
  );

  function parseTimeToMinutes(time) {
    const [h, m] = time.trim().split(":").map(Number);
    return h * 60 + m;
  }

  const totalMinutes = dailyEntries.reduce(
    (sum, entry) => sum + parseTimeToMinutes(entry.time),
    0,
  );

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  const nameTotals = dailyEntries.reduce((acc, entry) => {
    const mins = parseTimeToMinutes(entry.time);
    acc[entry.name] = (acc[entry.name] || 0) + mins;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(nameTotals),
    datasets: [
      {
        label: "Time by person",
        data: Object.values(nameTotals),
        backgroundColor: [
          "#4CAF50",
          "#FF9800",
          "#2196F3",
          "#E91E63",
          "#9C27B0",
          "#FF5722",
        ],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  if (dailyEntries.length === 0) {
    return (
      <div className="bg-slate-700 text-slate-300 p-4 mt-5 flex flex-col w-max border border-slate-300 rounded-md">
        <p>No data for the selected day.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 text-slate-300 p-4 mt-5 flex flex-col w-max border border-slate-300 rounded-md">
      <h2 className="text-lg font-semibold">Napi összesítő</h2>
      <p>
        Selected day:{" "}
        <span className="font-bold">
          {format(new Date(selectedDate), "yyyy-MM-dd")}
        </span>
      </p>
      <p>
       Total time:{" "}
        <span className="font-bold">
          {totalHours} hours {remainingMinutes} mins
        </span>
      </p>
      <div className="mt-4">
        <Pie data={chartData} />
      </div>
    </div>
  );
}
