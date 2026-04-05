const NoticiasPage = () => {
  const posts = [
    {
      date: "2024.12.13 — 03:33",
      title: "El APK de Talking Tom 3: Lo que sabemos hasta ahora",
      tags: ["LOST_MEDIA", "INVESTIGACIÓN"],
      body: "Después de meses de rastreo, hemos obtenido una copia del archivo APK que supuestamente sobrevivió al incendio del data center en Brasil. Los análisis preliminares muestran código ofuscado que no corresponde a ninguna versión conocida de la app. El binario contiene referencias a 'ambient_listener_v3' y 'eye_track_passive'. Continuaremos reportando.",
    },
    {
      date: "2024.12.10 — 00:07",
      title: "Happy Mod: El espejo que sonríe",
      tags: ["PORTAL", "ANOMALÍA"],
      body: "Documentamos el acceso al portal alternativo de Happy Mod. A diferencia de la versión oficial, este mirror parece modificar el comportamiento de las aplicaciones a nivel de runtime. Tres investigadores reportaron que sus teléfonos comenzaron a mostrar notificaciones de apps que nunca instalaron. Todas las notificaciones contenían el emoji ☺.",
    },
    {
      date: "2024.11.28 — 23:59",
      title: "Actualización de la base de datos: 3 juegos recuperados",
      tags: ["ARCHIVO", "UPDATE"],
      body: "Tres nuevos títulos han sido añadidos al archivo de juegos perdidos. Los detalles permanecen clasificados hasta que el equipo de contención complete su análisis. Se recomienda no buscar los títulos en motores de búsqueda convencionales.",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="pixel-border bg-card p-3">
        <h2 className="text-primary text-sm font-bold">▓ NOTICIAS DEL ABISMO ▓</h2>
        <p className="text-muted-foreground text-[10px]">Bitácora de investigación — transmisiones no verificadas</p>
      </div>

      {posts.map((p, i) => (
        <article key={i} className="pixel-border bg-card p-4">
          <div className="text-muted-foreground text-[10px] mb-1">{p.date}</div>
          <h3 className="text-foreground text-base font-bold mb-2">{p.title}</h3>
          <div className="flex gap-1 mb-3">
            {p.tags.map((t) => (
              <span key={t} className="bg-primary/10 border border-primary/30 text-primary text-[9px] px-1.5 py-0.5">{t}</span>
            ))}
          </div>
          <p className="text-foreground text-sm leading-relaxed">{p.body}</p>
          <div className="border-t border-border/30 mt-3 pt-2 text-[10px] text-muted-foreground">
            ▸ Publicado por SISTEMA | Comentarios: DESHABILITADOS
          </div>
        </article>
      ))}
    </div>
  );
};

export default NoticiasPage;
