import React from "react";
import TimeEntryItem from "./TimeEntryItem";

export default function TimeEntryList({
  entries,
  deleteTimeEntry,
  editTimeEntry,
}) {
  return (
    <div className="flex flex-col mx-auto p-4 max-w-[1000px]">
      <h2 className="text-2xl text-slate-100  font-semibold mt-5 mb-2">
        Time Entries
      </h2>
      {entries?.length === 0 && (
        <h2 className="text-xl text-slate-100 font-semibold text-center mt-[5rem]">
          No entries available
        </h2>
      )}
      {entries?.length > 0 && (
        <table className="rounded-t-xl overflow-hidden">
          <thead className="space-y-4 bg-slate-500">
            <tr className="">
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Name
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Description
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Workday
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Start Time
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                End Time
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Duration
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100">
                Tags
              </th>
              <th className="py-2 px-4 border-b text-start text-sm font-semibold text-slate-100"></th>
            </tr>
          </thead>
          <tbody>
            {entries?.map((entry) => (
              <TimeEntryItem
                key={entry.id}
                {...entry}
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
