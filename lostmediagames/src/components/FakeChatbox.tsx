import { useState, useEffect } from "react";

const ghostMessages = [
  { user: "x_VOID_x", msg: "alguien más ve las sombras?", time: "03:33" },
  { user: "dat0s_curi0s0s", msg: "nuevo video sobre el Tom corrupto...", time: "03:34" },
  { user: "SISTEMA", msg: ">> usuario desconectado por inactividad", time: "03:35" },
  { user: "cueva_admin", msg: "no abran el .apk todavía", time: "03:36" },
  { user: "???", msg: "él ya sabe que estás aquí", time: "03:37" },
  { user: "SISTEMA", msg: ">> 3 usuarios en línea (2 visibles)", time: "03:38" },
  { user: "n0_existe", msg: "la descarga se completó sola...", time: "03:39" },
];

const FakeChatbox = () => {
  const [messages, setMessages] = useState(ghostMessages.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        const nextIdx = prev.length % ghostMessages.length;
        return [...prev.slice(-5), ghostMessages[nextIdx]];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pixel-border bg-card p-2">
      <div className="border-b border-primary/30 pb-1 mb-2 text-xs text-primary font-bold">
        💀 CHAT EN VIVO — #abismo
      </div>
      <div className="space-y-1 text-xs max-h-40 overflow-hidden">
        {messages.map((m, i) => (
          <div key={i} className="opacity-80">
            <span className="text-primary">[{m.time}]</span>{" "}
            <span className="text-accent">&lt;{m.user}&gt;</span>{" "}
            <span className="text-foreground">{m.msg}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1">
        <input
          type="text"
          placeholder="escribe aquí..."
          disabled
          className="flex-1 bg-secondary border border-border text-xs px-1 py-0.5 text-muted-foreground"
        />
        <button disabled className="bg-primary/20 border border-primary/40 text-primary text-xs px-2">
          ▶
        </button>
      </div>
    </div>
  );
};

export default FakeChatbox;
