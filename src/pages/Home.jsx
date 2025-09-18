import React, { useEffect, useState } from "react";
import DailySummary from "../components/Summary/DailySummary";
import WeeklySummary from "../components/Summary/WeeklySummary";

export default function Home() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntriesFromLocalStorage = () => {
      const localValue = localStorage.getItem("timeEntries");
      if (localValue == null) return;

      try {
        const parsedEntries = JSON.parse(localValue);
        setEntries(parsedEntries);
      } catch (err) {
        console.error(
          "An error occurred while parsing the localStorage data:",
          err
        );
      }
    };

    fetchEntriesFromLocalStorage();
  }, []);

  return (
    <main className="p-4 flex">
      <div className="">
        <p>Daily summary</p>
        <DailySummary entries={entries} selectedDate={Date.now()} />
      </div>
      <div className="">
        <p>Weekly summary</p>
        <WeeklySummary entries={entries} selectedDate={Date.now()}/>
      </div>
    </main>
  );
}
