import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

const navLinks = [
  { to: "/", label: "INICIO" },
  { to: "/juegos", label: "JUEGOS" },
  { to: "/noticias", label: "NOTICIAS" },
  { to: "/arte", label: "ARTE" },
];

const DesktopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-primary/30 p-4">
        <nav className="flex justify-center space-x-4">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-lg font-bold ${isActive ? "text-primary" : "text-foreground hover:text-primary/70"}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="border-t border-primary/30 p-4 text-center text-sm text-muted-foreground">
        <div>[ LOST MEDIA WEB v0.6.6.6 ]</div>
        <div>© 2024 LostMedia Web. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default DesktopLayout;