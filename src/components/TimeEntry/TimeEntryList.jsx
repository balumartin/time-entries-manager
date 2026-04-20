import React from "react";
import TimeEntryItem from "./TimeEntryItem.jsx";

export default function TimeEntryList({
  entries,
  deleteTimeEntry,
  editTimeEntry,
}) {
  return (
    <div className="flex flex-col mx-auto my-5 border border-slate-500 rounded-sm overflow-hidden">
      {entries?.length === 0 ? (
        <h2 className="text-xl text-slate-300 font-semibold flex items-center justify-center">
          No entries available
        </h2>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="w-full bg-slate-700">
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Name
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Description
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Workday
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Start
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                End
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Duration
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400">
                Tags
              </th>
              <th className="py-2 px-4 text-start font-medium font-mono text-xs text-slate-400"></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <TimeEntryItem
                key={entry.id}
                entry={entry}
                deleteTimeEntry={deleteTimeEntry}
                editTimeEntry={editTimeEntry}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
