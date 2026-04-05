import { useState } from "react";

const artworks = [
  { title: "Paisaje de Lavender Town", desc: "Captura de pantalla de una ROM modificada. Los colores no deberían ser así.", color: "from-purple-900/30 to-black" },
  { title: "Retrato del Gato", desc: "Generado por la IA interna del APK de Talking Tom 3. Nadie solicitó esta imagen.", color: "from-teal-900/30 to-black" },
  { title: "Interfaz Happy Mod v∞", desc: "Screenshot del portal mirror. Nótese las caras en el fondo.", color: "from-yellow-900/30 to-black" },
  { title: "Mapa Corrupto — RPG Maker 2003", desc: "Tileset extraído de un juego que nunca fue publicado. El mapa se genera solo.", color: "from-red-900/30 to-black" },
  { title: "Transmisión Interceptada", desc: "Frame capturado de una señal de TV analógica. Fecha: desconocida.", color: "from-green-900/30 to-black" },
  { title: "El Último Save", desc: "Archivo de guardado renderizado como imagen. Los píxeles forman un rostro.", color: "from-blue-900/30 to-black" },
];

const ArtePage = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="pixel-border bg-card p-3">
        <h2 className="text-primary text-sm font-bold">▓ GALERÍA OSCURA ▓</h2>
        <p className="text-muted-foreground text-[10px]">Arte recuperado de archivos corruptos — 16-bit y pixel art</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {artworks.map((art, i) => (
          <div
            key={i}
            className="pixel-border bg-card overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className={`aspect-square bg-gradient-to-br ${art.color} flex items-center justify-center relative`}>
              <div className="text-4xl opacity-30 group-hover:opacity-60 transition-opacity">
                {["👁", "🎮", "☺", "🗺", "📡", "💾"][i]}
              </div>
              {hoveredIdx === i && (
                <div className="absolute inset-0 bg-primary/10 animate-pulse" />
              )}
              <div className={`absolute inset-0 ${hoveredIdx === i ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
                style={{
                  backgroundImage: hoveredIdx === i ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.3'/%3E%3C/svg%3E")` : "none",
                }}
              />
            </div>
            <div className="p-2">
              <h3 className="text-foreground text-xs font-bold">{art.title}</h3>
              <p className="text-muted-foreground text-[10px] mt-0.5">{art.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtePage;
