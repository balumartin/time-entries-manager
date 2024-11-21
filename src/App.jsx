import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TimeEntryForm from "./components/TimeEntryForm.jsx";
import timeClockIcon from "./assets/time-clock.svg";
import TimeEntryList from "./components/TimeEntryList.jsx";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [entries, setEntries] = useState(() => {
    const localValue = localStorage.getItem("timeEntries");
    if (localValue == null) return [];

    try {
      return JSON.parse(localValue);
    } catch (err) {
      console.error(
        "An error occurred while parsing the localStorage data:",
        err
      );
      return [];
    }
  });
  const [editingEntry, setEditingEntry] = useState(null);

  const editTimeEntry = (entryToEdit) => {
    setEditingEntry(entryToEdit);
  };

  const createTimeEntry = (data) => {
    if (editingEntry) {
      setEntries(
        (currentEntries) =>
          currentEntries.map((entry) =>
            entry.id === editingEntry.id ? { ...entry, ...data } : entry
          ),
        toast.success("Successfully saved!")
      );
      setEditingEntry(null);
    } else {
      setEntries(
        (currentEntries) => [...currentEntries, { id: uuidv4(), ...data }],
        toast.success("Successfully added!")
      );
    }
  };

  const deleteTimeEntry = (id) => {
    setEntries((currentEntries) => {
      return currentEntries.filter((entry) => entry.id !== id);
    });
    toast.success("Successfully deleted");
  };

  useEffect(() => {
    localStorage.setItem("timeEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <>
      <Toaster />
      <div className="w-full p-1 my-5 bg-slate-600">
        <div className="flex items-center">
          <img className="h-[2rem] mx-2" src={timeClockIcon} alt="time-clock" />
          <span className="text-2xl text-slate-100">Time Entries Manager</span>
        </div>
      </div>
      <TimeEntryForm onSubmit={createTimeEntry} newValues={editingEntry} />
      <TimeEntryList
        entries={entries}
        editTimeEntry={editTimeEntry}
        deleteTimeEntry={deleteTimeEntry}
      />
    </>
  );
}

export default App;
