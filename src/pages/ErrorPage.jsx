import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-semibold text-slate-200 mb-4">
        Something went wrong
      </h1>

      <p className="text-slate-400 mb-2">
        {error?.statusText || error?.message || "Unexpected error occurred."}
      </p>

      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-500"
      >
        Go back home
      </Link>
    </div>
  );
}
