import { NavLink } from "react-router-dom";

export default function AppNav() {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/time-entries", label: "Time Entries" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="w-[150px] h-full border-r border-slate-600">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `block w-full px-3 py-3 uppercase ${
                  isActive
                    ? "bg-slate-500 text-slate-300"
                    : "text-slate-300 hover:bg-slate-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
