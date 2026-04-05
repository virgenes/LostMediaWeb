import { Link } from "react-router-dom";
import Credits from "@/components/Credits";

const HomePage = () => (
  <div className="space-y-4">
    {/* Hero */}
    <div className="pixel-border bg-card p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="text-primary text-[10px] tracking-[0.3em] mb-2">[ TRANSMISIÓN ACTIVA ]</div>
      <h2 className="text-foreground text-2xl font-bold mb-2 glitch-hover inline-block">
        BIENVENIDO A LOST MEDIA WEB
      </h2>
      <p className="text-muted-foreground text-sm max-w-lg mx-auto">
        Archivo digital de horror indie, RPGs olvidados y media perdida.
        Lo que encuentres aquí no debería existir. Pero existe.
        Y ahora sabe que lo estás viendo.
      </p>
      <div className="mt-3 text-accent text-xs animate-blink">
        ▼ DESCENDÉ AL ARCHIVO ▼
      </div>
    </div>

    {/* Recent updates */}
    <div className="pixel-border bg-card p-3">
      <h3 className="text-primary text-sm font-bold mb-2 border-b border-primary/20 pb-1">
        ☢ ACTUALIZACIONES RECIENTES
      </h3>
      <div className="space-y-2 text-xs">
        {[
          { date: "2024.12.13", text: "Nuevo archivo corrupto añadido: Talking Tom 3 APK", tag: "CRITICAL" },
          { date: "2024.12.10", text: "Portal Happy Mod documentado — acceso bajo riesgo propio", tag: "WARNING" },
          { date: "2024.12.05", text: "Se detectó actividad anómala en el servidor de arte", tag: "INFO" },
          { date: "2024.11.28", text: "Base de datos de juegos perdidos: 3 nuevas entradas", tag: "UPDATE" },
          { date: "2024.11.15", text: "Sección de noticias restaurada desde backup corrupto", tag: "RESTORED" },
        ].map((u, i) => (
          <div key={i} className="flex items-start gap-2 border-b border-border/30 pb-1">
            <span className="text-muted-foreground text-[10px] shrink-0">{u.date}</span>
            <span className="text-foreground flex-1">{u.text}</span>
            <span className="text-primary text-[9px] border border-primary/30 px-1">{u.tag}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Quick links */}
    <div className="grid grid-cols-2 gap-3">
      <Link to="/juegos" className="pixel-border bg-card p-3 text-center glitch-hover no-underline block">
        <div className="text-primary text-2xl mb-1">🎮</div>
        <div className="text-foreground text-sm font-bold">JUEGOS</div>
        <div className="text-muted-foreground text-[10px]">Archivos clasificados</div>
      </Link>
      <Link to="/arte" className="pixel-border bg-card p-3 text-center glitch-hover no-underline block">
        <div className="text-primary text-2xl mb-1">🖼</div>
        <div className="text-foreground text-sm font-bold">ARTE</div>
        <div className="text-muted-foreground text-[10px]">Galería oscura</div>
      </Link>
    </div>

    {/* Credits */}
    <Credits />
  </div>
);

export default HomePage;
