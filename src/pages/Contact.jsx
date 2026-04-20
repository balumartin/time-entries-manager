export default function Contact() {
  return (
    <main className="p-6 max-w-3xl">
      <h1 className="text-2xl font-semibold text-slate-200 mb-4">Contact</h1>

      <p className="text-slate-300 mb-4">
        If you have any questions about this project or would like to get in
        touch, feel free to reach out.
      </p>

      <div className="text-slate-300 space-y-2">
        <p>
          Email:{" "}
          <a className="text-blue-400 underline">
            test [ at ] email.com
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            target="_blank"
            className="text-blue-400 underline"
          >
            github.com/balumartin
          </a>
        </p>
      </div>
    </main>
  );
}
