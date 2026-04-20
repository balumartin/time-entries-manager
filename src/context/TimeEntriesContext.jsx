import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TimeEntriesContext = createContext();

export function TimeEntriesProvider({ children }) {
  const [editingEntry, setEditingEntry] = useState(null);
  const [entries, setEntries] = useState(() => {
  const stored = localStorage.getItem("timeEntries");
  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("parse error:", err);
    return [];
  }
});

  useEffect(() => {
    localStorage.setItem("timeEntries", JSON.stringify(entries));
  }, [entries]);

  function addOrUpdateEntry(data) {
    if (editingEntry) {
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === editingEntry.id ? { ...entry, ...data } : entry
        )
      );
      setEditingEntry(null);
    } else {
      setEntries((prev) => [...prev, { id: uuidv4(), ...data }]);
    }
  }

  function deleteEntry(id) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  }

  function startEdit(entry) {
    setEditingEntry(entry);
  }

  return (
    <TimeEntriesContext.Provider
      value={{
        entries,
        editingEntry,
        addOrUpdateEntry,
        deleteEntry,
        startEdit,
      }}
    >
      {children}
    </TimeEntriesContext.Provider>
  );
}

export function useTimeEntries() {
  const ctx = useContext(TimeEntriesContext);
  if (!ctx) throw new Error("useTimeEntries must be used within provider");
  return ctx;
}