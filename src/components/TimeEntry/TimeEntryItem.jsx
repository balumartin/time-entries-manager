import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export default function TimeEntryItem({
  entry,
  deleteTimeEntry,
  editTimeEntry
}) {
  const { id, name, description, startTime, endTime, time, workDay, tags } =
    entry;

  function handleEdit() {
    editTimeEntry(entry);
  }

  function handleDelete() {
    deleteTimeEntry(id);
  }

  return (
    <tr className="border-t border-slate-500 hover:bg-slate-700">
      <td className="py-2 px-4 text-sm text-slate-100">{name}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{description}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{workDay}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{startTime}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{endTime}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{time}</td>
      <td className="py-2 px-4 text-sm text-slate-100">{tags}</td>
      <td className="py-2 px-4 text-sm text-slate-100">
        <div className="flex items-center justify-center gap-2">
          <button
            aria-label="Edit entry"
            onClick={handleEdit}
            className="p-2 bg-yellow-600 rounded-xl"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={handleDelete}
            aria-label="Delete entry"
            className="p-2 bg-red-600 rounded-xl"
            
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
}
