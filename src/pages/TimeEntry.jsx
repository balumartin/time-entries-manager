import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TimeEntryForm from "../components/TimeEntry/TimeEntryForm.jsx";
import TimeEntryList from "../components/TimeEntry/TimeEntryList.jsx";
import toast from "react-hot-toast";

function TimeEntry() {
  const [entries, setEntries] = useState(() => {
    const localValue = localStorage.getItem("timeEntries");
    if (localValue == null) return [];

    try {
      return JSON.parse(localValue);
    } catch (err) {
      console.error(
        "An error occurred while parsing the localStorage data:",
        err,
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
        toast.success("Successfully saved!", {
        style: {
          borderRadius: "10px",
          background: "#94a3b8",
          color: "#fff",
        },
      })
      );
      setEditingEntry(null);
    } else {
      setEntries(
        (currentEntries) => [...currentEntries, { id: uuidv4(), ...data }],
        toast.success("Successfully added!"), {
        style: {
          borderRadius: "10px",
          background: "#94a3b8",
          color: "#fff",
        },
      }
      );
    }
  };

  const deleteTimeEntry = (id) => {
    setEntries((currentEntries) => {
      return currentEntries.filter((entry) => entry.id !== id);
    });
    toast.success("Successfully deleted"), {
        style: {
          borderRadius: "10px",
          background: "#94a3b8",
          color: "#fff",
        },
      };
  };

  useEffect(() => {
    localStorage.setItem("timeEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <main className="px-5">
      <TimeEntryForm onSubmit={createTimeEntry} newValues={editingEntry} />
      <TimeEntryList
        entries={entries}
        editTimeEntry={editTimeEntry}
        deleteTimeEntry={deleteTimeEntry}
      />
    </main>
  );
}

export default TimeEntry;
