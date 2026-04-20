import TimeEntryForm from "../components/TimeEntry/TimeEntryForm";
import TimeEntryList from "../components/TimeEntry/TimeEntryList";
import { useTimeEntries } from "../context/TimeEntriesContext";
import toast from "react-hot-toast";

export default function TimeEntry() {
  const { entries, editingEntry, addOrUpdateEntry, deleteEntry, startEdit } =
    useTimeEntries();

  function handleSubmit(data) {
    addOrUpdateEntry(data);

    toast.success(editingEntry ? "Saved!" : "Added!");
  }

  function handleDelete(id) {
    deleteEntry(id);
    toast.success("Deleted!");
  }

  return (
    <main className="px-5">
      <TimeEntryForm onSubmit={handleSubmit} newValues={editingEntry} />
      <TimeEntryList
        entries={entries}
        editTimeEntry={startEdit}
        deleteTimeEntry={handleDelete}
      />
    </main>
  );
}
