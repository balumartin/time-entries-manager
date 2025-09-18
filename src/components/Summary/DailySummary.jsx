import React from "react";
import { format, isSameDay } from "date-fns";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DailySummary({ entries, selectedDate }) {
  const dailyEntries = entries.filter((entry) =>
    isSameDay(new Date(entry.workDay), new Date(selectedDate))
  );

  console.log(entries);

  const totalMinutes = dailyEntries.reduce((total, entry) => {
    const [hours, minutes] = entry.time.split(":").map(Number);
    return total + hours * 60 + minutes;
  }, 0);

  const totalHours = Math.floor(totalMinutes / 60);
  const remainingMinutes = totalMinutes % 60;

  const nameTotals = dailyEntries.reduce((acc, entry) => {
    const [hours, minutes] = entry.time.trim().split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;

    if (!acc[entry.name]) {
      acc[entry.name] = totalMinutes;
    } else {
      acc[entry.name] += totalMinutes;
    }
    console.log("acc: ", acc)
    return acc;
  }, {});

  console.log("nameTotals: ", nameTotals)

  const chartData = {
    labels: Object.keys(nameTotals),
    datasets: [
      {
        label: "Munkaidő személyek szerint",
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
        <p>Nincs adat a kiválasztott napra.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 text-slate-300 p-4 mt-5 flex flex-col w-max border border-slate-300 rounded-md">
      <h2 className="text-lg font-semibold">Napi összesítő</h2>
      <p>
        Kiválasztott nap:{" "}
        <span className="font-bold">
          {format(new Date(selectedDate), "yyyy-MM-dd")}
        </span>
      </p>
      <p>
        Összesített idő:{" "}
        <span className="font-bold">
          {totalHours} óra {remainingMinutes} perc
        </span>
      </p>
      <div className="mt-4">
        <Pie data={chartData} />
      </div>
    </div>
  );
}
