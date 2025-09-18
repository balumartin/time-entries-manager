import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/time-entries", label: "Time Entries" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About Us" }
  ];

  return (
    <nav className="flex flex-col border-r border-slate-500">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `py-2 px-4 ${
              isActive
                ? " bg-slate-500 text-slate-300"
                : "hover:bg-slate-500 text-slate-300"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
