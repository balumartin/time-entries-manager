import DailySummary from "../components/Summary/DailySummary";
import WeeklySummary from "../components/Summary/WeeklySummary";
import { useTimeEntries } from "../context/TimeEntriesContext";

export default function Home() {
  const {entries} = useTimeEntries();

  return (
    <main className="p-4 flex">
      <div className="">
        <p>Daily summary</p>
        <DailySummary entries={entries} selectedDate={Date.now()} />
      </div>
      {/* <div className="">
        <p>Weekly summary</p>
        <WeeklySummary entries={entries} selectedDate={Date.now()}/>
      </div> */}
    </main>
  );
}
