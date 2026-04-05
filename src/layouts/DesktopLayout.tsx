import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import MarqueeText from "@/components/MarqueeText";
import FakeChatbox from "@/components/FakeChatbox";
import WinampPlayer from "@/components/WinampPlayer";

const navLinks = [
  { to: "/", label: "[ INICIO ]" },
  { to: "/juegos", label: "[ JUEGOS ]" },
  { to: "/noticias", label: "[ NOTICIAS ]" },
  { to: "/arte", label: "[ ARTE ]" },
];

const DesktopLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col animate-flicker">
    {/* Top marquee */}
    <MarqueeText text="★ BIENVENIDO A LOST MEDIA WEB ★ LOST MEDIA ★ INDIE HORROR RPG ★ NO CONFÍES EN LO QUE VES ★ LA CONEXIÓN ES INESTABLE ★ DATOS CURIOSOS DE VIDEOJUEGOS ★ CUEVA DE LOS VÍRGENES ★ EL OJO SIEMPRE OBSERVA ★" />

    {/* Header */}
    <header className="border-b border-primary/30 bg-card px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-primary text-xl font-bold tracking-widest glitch-hover inline-block">
            ▓ LOST MEDIA WEB ▓
          </h1>
          <div className="text-muted-foreground text-[10px]">
            // indie horror RPG & lost media archive — v0.6.6.6
          </div>
        </div>
        <nav className="flex gap-3 text-sm">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `no-underline transition-colors ${isActive ? "text-primary" : "text-accent hover:text-primary"}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>

    {/* Main area: 3 columns */}
    <div className="flex-1 max-w-6xl mx-auto w-full grid grid-cols-[180px_1fr_200px] gap-3 p-3">
      {/* Left sidebar */}
      <aside className="space-y-3">
        <div className="pixel-border bg-card p-2 text-[10px]">
          <div className="text-primary font-bold mb-1">☠ ESTADO DEL SERVIDOR</div>
          <div className="text-muted-foreground">Uptime: 6666 días</div>
          <div className="text-muted-foreground">Conexiones: <span className="text-accent">???</span></div>
          <div className="text-muted-foreground">Amenazas: <span className="text-primary">ACTIVAS</span></div>
          <div className="text-muted-foreground mt-1 animate-blink">▸ Monitoreo activo...</div>
        </div>
        <div className="pixel-border bg-card p-2 text-[10px]">
          <div className="text-primary font-bold mb-1">🔗 ENLACES</div>
          <ul className="space-y-1">
             <li><a href="https://www.youtube.com/@DATOSCURIOSOSDEVIDEOJUEGOSYAPP" target="_blank" rel="noopener noreferrer" className="text-accent text-[10px]">DatosCuriosos YT</a></li>
            <li><a href="https://www.youtube.com/@CuevadelosVirgenes" target="_blank" rel="noopener noreferrer" className="text-accent text-[10px]">CuevaDeLosVirgenes</a></li>
          </ul>
        </div>
        <div className="pixel-border bg-card p-2 text-[10px] text-center">
          <div className="text-muted-foreground">visitantes:</div>
          <div className="text-accent text-lg font-bold">000,666</div>
          <div className="text-[8px] text-muted-foreground">(conteo no verificado)</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="min-h-[60vh]">
        {children}
      </main>

      {/* Right sidebar */}
      <aside className="space-y-3">
        <WinampPlayer />
        <FakeChatbox />
        <div className="pixel-border bg-card p-2 text-[10px] text-center">
          <div className="text-primary mb-1">⚠ ADVERTENCIA ⚠</div>
          <p className="text-muted-foreground">
            Este sitio contiene archivos no verificados. El equipo no se responsabiliza por
            llamadas fantasma o comportamiento anómalo del dispositivo.
          </p>
        </div>
      </aside>
    </div>

    {/* Footer marquee */}
    <MarqueeText text="◄◄◄ NO CIERRES ESTA VENTANA ◄◄◄ LOST MEDIA WEB ◄◄◄ ARCHIVO CORRUPTO DETECTADO ◄◄◄ CONEXIÓN MONITOREADA ◄◄◄" />

    {/* Footer */}
    <footer className="border-t border-primary/30 bg-card px-4 py-2 text-center text-[10px] text-muted-foreground">
      <div>© 2024 LOST MEDIA WEB — Todos los archivos son propiedad de nadie</div>
      <div className="text-primary/50 mt-1">Best viewed with Netscape Navigator 4.0 | 800x600 | 256 colors</div>
    </footer>
  </div>
);

export default DesktopLayout;
