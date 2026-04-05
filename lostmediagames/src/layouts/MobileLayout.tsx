import { NavLink } from "react-router-dom";
import { ReactNode, useState } from "react";
import KeitaiShell from "@/components/KeitaiShell";

const navLinks = [
  { to: "/", label: "INICIO", icon: "◈" },
  { to: "/juegos", label: "JUEGOS", icon: "◆" },
  { to: "/noticias", label: "NOTICIAS", icon: "◇" },
  { to: "/arte", label: "ARTE", icon: "◊" },
];

const MobileLayout = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <KeitaiShell>
      {/* Mobile header */}
      <div className="border-b border-primary/30 pb-2 mb-2">
        <div className="flex justify-between items-center">
          <span className="text-primary font-bold text-sm">▓ LMW ▓</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-accent text-xs border border-accent/30 px-2 py-0.5"
          >
            {menuOpen ? "✕" : "☰"} MENÚ
          </button>
        </div>
        {menuOpen && (
          <nav className="mt-2 border border-primary/20 bg-secondary/50 p-2 space-y-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block no-underline px-1 py-0.5 text-xs ${isActive ? "text-primary bg-primary/10" : "text-accent"}`
                }
                end={l.to === "/"}
              >
                {l.icon} {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>

      {/* Content */}
      <div className="min-h-[70vh]">
        {children}
      </div>

      {/* Mobile footer */}
      <div className="border-t border-primary/30 pt-2 mt-4 text-center text-[9px] text-muted-foreground">
        <div>[ LOST MEDIA WEB v0.6.6.6 ]</div>
        <div className="animate-blink text-primary mt-1">señal inestable...</div>
      </div>
    </KeitaiShell>
  );
};

export default MobileLayout;
