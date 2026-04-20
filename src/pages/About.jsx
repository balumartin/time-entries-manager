export default function About() {
  return (
    <main className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold text-slate-200 mb-4">
        About This Project
      </h1>

      <p className="text-slate-300 mb-4">
        This is a simple time tracking app built with React.
      </p>

      <p className="text-slate-300 mb-4">
        Built mainly for practice — focusing on state management, component structure, and data handling with localStorage.
      </p>

      <p className="text-slate-300">
        You can add, edit, and delete entries, and view summaries with charts.
      </p>
    </main>
  );
}
